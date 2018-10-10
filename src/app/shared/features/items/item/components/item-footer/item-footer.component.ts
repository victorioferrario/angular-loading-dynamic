import { BehaviorSubject } from 'rxjs';
import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit
} from '@angular/core';
/**
 * @alias: Local Components & Types
 * */
import { IItem, IItemAttribute } from '@hubx/domain';
import {
  IDataItem,
  ButtonTypes,
  ButtonTypeCodes, ButtonIconTypes
} from '../../models/ButtonTypes';
import { IconItemComponent } from '../item-icon-template/icon-item.component';
import { DynamicIconComponent } from '../item-icon-template/dynamic-icon.component';
@Component({
  selector: 'app-items-item-footer',
  templateUrl: './item-footer.component.html',
  styleUrls: ['./item-footer.component.scss']
})
export class ItemFooterComponent implements OnInit {
  /**
   * @viewchild: dynamic
   */
  @ViewChild('dynamic', {
    read: ViewContainerRef
  })
  container: ViewContainerRef;
  protected factoryResolver: ComponentFactoryResolver;
  public ButtonTypes = ButtonTypes;
  @Input()
  item: IItem;
  constructor(private factory: ComponentFactoryResolver) {
    const self = this;
    self.factoryResolver = factory;
  }
  protected initializeDynamicComponetArray() {
    const self = this;
    const list: IDataItem[] = [];
    self.item.attributes.forEach((data: IItemAttribute) => {
      switch (data.code) {
        case ButtonTypeCodes.CONDITION:
          list.push({ text: data.value, type: ButtonTypes.CONDITION, icon: ButtonIconTypes.CONDITION });
          break;
        case ButtonTypeCodes.PACKAGING:
          list.push({ text: data.value, type: ButtonTypes.PACKAGING, icon: ButtonIconTypes.PACKAGING });
          break;
        case ButtonTypeCodes.WARRANTY:
          list.push({ text: data.value, type: ButtonTypes.WARRANTY,  icon: ButtonIconTypes.WARRANTY });
          break;
        case ButtonTypeCodes.RESTRICTIONS:
          list.push({ text: null, type: ButtonTypes.RESTRICTIONS,  icon: ButtonIconTypes.RESTRICTIONS });
          break;
      }
    });
    if (self.item.leadTimeDays !== null && self.item.leadTimeDays > 0) {
      list.push({
        text: self.item.leadTimeDays + ' Days',
        type: ButtonTypes.ETA,
        icon: ButtonIconTypes.ETA
      });
    }
    self.addDynamicComponents(list);
    return true;
  }
  addDynamicComponents(list: IDataItem[]) {
    const self = this;
    list.forEach((data: IDataItem) => {
      self.container.insert(self.generateDynamicComponent(data));
    });
  }
  generateDynamicComponent(data: IDataItem) {
    const factory = this.factoryResolver.resolveComponentFactory(
      DynamicIconComponent
    );
    const component = factory.create(this.container.parentInjector);
    component.instance.databind(data.text, data.type, data.icon);
    return component.hostView;
  }
  ngOnInit() {
    this.initializeDynamicComponetArray();
  }
}
