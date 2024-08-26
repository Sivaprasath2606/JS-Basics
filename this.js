let laptop1 = {
cpu : "i5",
ram : "2gb",
rom : "256gb",

sysconfig: function(){
    console.log(this.cpu, this.ram, this.rom);
}
};

let laptop2 = {
    cpu : "i7",
    ram : "4gb",
    rom : "512gb",
    
    sysconfig: function(){
        console.log(this.cpu, this.ram, this.rom)
    }
};

    let laptop3 = {
        cpu :"i9",
        ram : "8gb",
        rom : "1tb",
        
        sysconfig: function(){
            console.log(this.cpu, this.ram, this.rom);
        }
    };

        laptop2.sysconfig();
