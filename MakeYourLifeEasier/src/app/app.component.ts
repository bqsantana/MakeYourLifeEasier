import { ViewEncapsulation, Component, Input, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  
    //inputUserText = document.getElementById("inputUserText").val;
    //trigger = document.getElementById("inputTrigger");
    //outputUserText = ""

    jumpLines(inputUserText:string, trigger:string, index:string, isTrg:boolean){
      if(isTrg)
        (<HTMLInputElement>document.getElementById("outputUserText")).value = inputUserText.replace(new RegExp(trigger, "g") , trigger  + "\n");
      else
        {
          let indexPosition = parseInt(index);
          for(let i = indexPosition; i < inputUserText.length; i=i+indexPosition+1){
            inputUserText = inputUserText.slice(0, i) + "\n" +  inputUserText.slice(i);
          }
          (<HTMLInputElement>document.getElementById("outputUserText")).value = inputUserText;
        }
    }
    listNumbers(maximum:string, minimum:string,decHex:boolean,isByte:boolean){
      let outputList = "";
      if(decHex == true){
        for(let i = parseInt(minimum); i < parseInt(maximum) + 1; i++){
          outputList = outputList + i + "\n";
        }
      }
      else if(decHex == false && isByte == false){
        for(let i = parseInt(minimum); i < parseInt(maximum) + 1; i++){
          outputList = outputList + i.toString(16) + "\n";
        }
      }
      else if(decHex == false && isByte == true){
        for(let i = parseInt(minimum); i < parseInt(maximum) + 1; i++){
          let byteArray = new Int32Array([i]).buffer;
          let newByteArray = new Uint8Array(byteArray);
          for (let x = 0; x < newByteArray.byteLength; x ++){
            outputList = outputList + (newByteArray[x].toString(16).length < 2 ? "0" + newByteArray[x].toString(16) : newByteArray[x].toString(16)).toLocaleUpperCase() + " ";
          }
          outputList = outputList + "\n";
        }
      }
      (<HTMLInputElement>document.getElementById("outputList")).value = outputList;
    }

    encodeToTranslate(encoding:string, inputUserText:string, outputText:string, normalWay:boolean){
      let encodingLineArray : string[] = encoding.split("\n");
      let splitedEncoding : string[];
      let translation : string[]= [];
      let translationIndex : number[] = [];
      let translationOrder : number[] = [];
      //for(let i = 0; i < encodingLineArray.length; i++)
      //  encodingLineArray[i].replace("\n", "")
      if(normalWay){
        for(let i = 0; i < encodingLineArray.length; i++){
          splitedEncoding = encodingLineArray[i].split("=");
          let workingText :string = inputUserText;
          while(workingText.includes(splitedEncoding[0])){
            //outputText = inputUserText1.replace(new RegExp(splitedEncoding[0],"g"),"")
            translationIndex.push(workingText.search(splitedEncoding[0]))
            workingText = workingText.replace(splitedEncoding[0]," ")
            translation.push(splitedEncoding[1]);
          }
        }
        translationOrder = translationIndex.sort();
        for(let i = 0; i < translationIndex.length; i++){
          for(let x = 0; x < translationIndex.length; x++){
            if(translationOrder[i] == translationIndex[x]){
              outputText = outputText + translation[x];
            }
          }
        }  
      }
      else{
        for(let i = 0; i < encodingLineArray.length; i++){
          splitedEncoding = encodingLineArray[i].split("=");
          let workingText :string = inputUserText;
          while(workingText.includes(splitedEncoding[1])){
            //outputText = inputUserText1.replace(new RegExp(splitedEncoding[0],"g"),"")
            translationIndex.push(workingText.search(splitedEncoding[1]))
            workingText = workingText.replace(splitedEncoding[1]," ")
            translation.push(splitedEncoding[0]);
          }
        }
        translationOrder = translationIndex.sort();
        for(let i = 0; i < translationIndex.length; i++){
          for(let x = 0; x < translationIndex.length; x++){
            if(translationOrder[i] == translationIndex[x]){
              outputText = outputText + translation[x];
            }
          }
        } 
      }
      (<HTMLInputElement>document.getElementById("decodedUserText")).value = outputText;
    }

    toBytesInt32 (num:number) {
      let arr = new ArrayBuffer(4); // an Int32 takes 4 bytes
      let view = new DataView(arr);
      view.setUint32(0, num, true); // byteOffset = 0; litteEndian = false
      return arr;
  }

}
