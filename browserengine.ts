interface HTMLToken {}

class Tokenizer {
    public static tokenize(html: string):HTMLToken[];
}

class NetworkModule {
    public static fetch(address:string):string;
}

class JavaScriptRunner {
    public static executeScript(dom: DOM, script: string);
}

class DOM {}

class DOMBuilder {

    public static buildDOM(tokens: HTMLToken[]):DOM {

        let dom = new DOM();

        if(isJavascript()) {
            //Single dispatch here: We might want to execute other languages than JavaScript
            JavaScriptRunner.executeScript(dom, script);
        }
    }

    public static parseToken() {
        
    }

}

class Test {

    doTheThing() {

        let htmlSource = NetworkModule.fetch('index.html');
        let tokens = Tokenizer.tokenize(htmlSource);
        let DOM = DOMBuilder.buildDOM(tokens);


    }

}