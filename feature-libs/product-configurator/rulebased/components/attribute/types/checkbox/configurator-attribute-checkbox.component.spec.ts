import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nTestingModule } from '@spartacus/core';
import { CommonConfiguratorTestUtilsService } from '../../../../../common/testing/common-configurator-test-utils.service';
import { Configurator } from '../../../../core/model/configurator.model';
import { ConfiguratorPriceComponentOptions } from '../../../price/configurator-price.component';
import { ConfiguratorAttributeCheckBoxComponent } from './configurator-attribute-checkbox.component';

@Directive({
  selector: '[cxFeatureLevel]',
})
export class MockFeatureLevelDirective {
  constructor(
    protected templateRef: TemplateRef<any>,
    protected viewContainer: ViewContainerRef
  ) {}

  @Input() set cxFeatureLevel(_feature: string | number) {
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}

@Directive({
  selector: '[cxFocus]',
})
export class MockFocusDirective {
  @Input('cxFocus') protected config: string;
}

@Component({
  selector: 'cx-configurator-price',
  template: '',
})
class MockConfiguratorPriceComponent {
  @Input() formula: ConfiguratorPriceComponentOptions;
}

describe('ConfigAttributeCheckBoxComponent', () => {
  let component: ConfiguratorAttributeCheckBoxComponent;
  let fixture: ComponentFixture<ConfiguratorAttributeCheckBoxComponent>;
  let htmlElem: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          ConfiguratorAttributeCheckBoxComponent,
          MockFocusDirective,
          MockFeatureLevelDirective,
          MockConfiguratorPriceComponent,
        ],
        imports: [ReactiveFormsModule, NgSelectModule, I18nTestingModule],
      })
        .overrideComponent(ConfiguratorAttributeCheckBoxComponent, {
          set: {
            changeDetection: ChangeDetectionStrategy.Default,
          },
        })
        .compileComponents();
    })
  );

  function createValue(code: string, name: string, isSelected: boolean) {
    const value: Configurator.Value = {
      valueDisplay: name,
      valueCode: code,
      name: name,
      selected: isSelected,
    };
    return value;
  }
  const value1 = createValue('1', 'val1', false);
  beforeEach(() => {
    const values: Configurator.Value[] = [value1];

    fixture = TestBed.createComponent(ConfiguratorAttributeCheckBoxComponent);
    component = fixture.componentInstance;
    htmlElem = fixture.nativeElement;

    component.attribute = {
      label: 'attributeName',
      name: 'attributeName',
      attrCode: 444,
      uiType: Configurator.UiType.CHECKBOX,
      values: values,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an entry after init with empty value', () => {
    expect(component.attributeCheckBoxForm.value).toBeFalsy();
  });

  it('should select and deselect a checkbox value', () => {
    const checkboxId =
      '#cx-configurator--checkBox--' +
      component.attribute.name +
      '--' +
      value1.valueCode;
    const valueToSelect = fixture.debugElement.query(
      By.css(checkboxId)
    ).nativeElement;
    expect(valueToSelect.checked).toBeFalsy();
    // select value
    valueToSelect.click();
    fixture.detectChanges();
    expect(valueToSelect.checked).toBeTruthy();
    // deselect value
    valueToSelect.click();
    fixture.detectChanges();
    expect(valueToSelect.checked).toBeFalsy();
  });

  describe('Accessibility', () => {
    it("should contain input element with class name 'form-check-input' and 'aria-label' attribute that overwrites input content for the screen reader", () => {
      CommonConfiguratorTestUtilsService.expectElementContainsA11y(
        expect,
        htmlElem,
        'input',
        'form-check-input',
        0,
        'aria-label',
        'configurator.a11y.valueOfAttributeFull attribute:attributeName value:val1'
      );
    });

    it("should contain label element with class name 'form-check-label' and 'aria-hidden' attribute that hides label content for the screen reader", () => {
      CommonConfiguratorTestUtilsService.expectElementContainsA11y(
        expect,
        htmlElem,
        'label',
        'form-check-label',
        0,
        'aria-hidden',
        'true',
        'val1'
      );
    });
  });
});
