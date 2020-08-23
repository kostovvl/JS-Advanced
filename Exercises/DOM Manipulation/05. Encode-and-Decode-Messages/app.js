function encodeAndDecodeMessages() {
    document.querySelector('#encode').addEventListener('click', onEncode);
    document.querySelector('#decode').addEventListener('click', onDecode);


    let inputTextArea = document.querySelector('#text-encode');
    let outputTextArea = document.querySelector('#text-decode');
    
    function onEncode(e) {
        let input = inputTextArea.value;

        outputTextArea.value = encode(input);
    }

    function onDecode(e) {
        let encodedText = outputTextArea.value;
        outputTextArea.value = decode(encodedText);
    }

    function encode(input) {
        let result = [];

        for(let i = 0; i < input.length; i++) {
            let currentchar = input.charCodeAt(i) + 1;
            result.push(String.fromCharCode(currentchar))
        }

        return result.join('');
    }

    function decode(input) {
        let result = [];

        for(let i = 0; i < input.length; i++) {
            let currentchar = input.charCodeAt(i) - 1;
            result.push(String.fromCharCode(currentchar))
        }

        return result.join('');
    }
}