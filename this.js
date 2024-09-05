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
    
    
    
    //  asynchronous JavaScript code
    
    function func1(callback)
    {
        setTimeout(() =>{ 
            console.log("Task1"),
            callback()
        }, 5000)
    }
    
    function func2(){
        console.log("Task2")
        console.log("Task3")
        console.log("Task4")
        console.log("Task5")
        
    }
    
    func1(func2)

    // Closure in Javascript

    function outer()
    {
        const msg = "Hello"
        function inner(){
            console.log(msg)
        }
        inner()
    }
    outer()