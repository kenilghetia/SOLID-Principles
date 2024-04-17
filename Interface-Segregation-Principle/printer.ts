import { IPrinter } from "./IPrinter";

export class SimplePrinter implements IPrinter {
  printDocument(): void {
    console.log("Printing document...");
  }
}
