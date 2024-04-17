import { IScanner } from "./IScanner";

export class SimpleScanner implements IScanner {
  scanDocument(): void {
    console.log("Scanning document...");
  }
}
