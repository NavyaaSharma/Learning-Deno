let text="helloo, this is a text"

//encoder is used because in Deno we can simply write the text to file, it needs to be encoded in a proper format
const encoder=new TextEncoder()
const data=encoder.encode(text)

Deno.writeFile("message.txt",data).then(()=>{
    console.log("wrote to file!")
})