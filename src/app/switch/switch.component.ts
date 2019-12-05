import {Component, forwardRef, OnInit, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
};

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor {
  private onChange = (value: any) => {
  };

  state: string = 'off';

  setState(state: string): void {
    this.state = state;
    this.onChange(this.state);
  }

  registerOnChange(fn: any): void {
    console.log(fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(state: string): void {
    this.state = state;
  }


}
