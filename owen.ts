interface OwenPage {
    showImage(url: string, x: number, y: number): void;
    setColor(color: string): void;
    printText(text: string, x: number, y: number): void;
    drawRect(x: number, y: number, height: number, width: number): void;
}

export function main(page: OwenPage): void {
    // Write your code here!
    page.setColor('royalblue');
    page.printText('Hello, World!', 50, 80);
}

let counter = 0;
export function onButtonClick(page: OwenPage): void {
    // Do something when the button is clicked!
}
