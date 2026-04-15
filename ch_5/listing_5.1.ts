@Component({
    selector: 'order-processor',
    template: `Buying {{quantity}} items`
})
export class OrderComponent {
    @Input() quantity: number;
}