import { ComponentFactoryResolver, Directive, HostListener, Input, Output, ViewContainerRef, EventEmitter } from '@angular/core';
import { PeriodicElement, RowSelectedEvent } from '../interface/interface.model';
import { SubTableComponent } from '../sub-table/sub-table.component';

@Directive({
  selector: '[appEmbedTable]',
})
export class EmbedTableDirective {
  @Input()
  row: PeriodicElement;
  @Output()
  selectChange: EventEmitter<RowSelectedEvent> = new EventEmitter<RowSelectedEvent>();

  constructor(private vcf: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {}

  @HostListener('click')
  openSubTable() {
    if (this.row && this.row.children && this.row.children.length > 0 && this.vcf.length < 1) {
      this.render();
      this.row.open = true;
    } else if (this.vcf.length > 0) {
      const el = this.vcf.element.nativeElement.nextElementSibling;
      el.remove();
      for (let i = 0; i <= this.vcf.length; i++) {
        this.vcf.remove(i);
      }
      this.row.open = false;
    }
  }

  render() {
    const compFac = this.componentFactoryResolver.resolveComponentFactory(SubTableComponent);
    const compRef = this.vcf.createComponent(compFac);
    (compRef.instance as SubTableComponent).dataList = this.row.children;
  }
}
