class hashTable {
    constructor(size){
        this.data = new Array(size);
    }

    hashMethod(key){
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 1 ) % this.data.length;
            
        }
        return hash;
    }

    set(key, value){
        const adress = this.hashMethod(key);
        if(!this.data[adress]){
            this.data[adress] = [];

        }
        this.data[adress].push([key,value]);
        return this.data
    } 

    get(key){
        const adress = this.hashMethod(key);
        const currentBucket = this.data[adress];
        if(currentBucket){
            for(let i = 0 ; i < currentBucket.length ; i++ ){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    delete(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0 ; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    const deletedValue = this.data[address][i];
                    this.data[address].splice(i, 1);
                    return deletedValue;
                }      
            }
        }
        //this.unShiftItem(key);

        
    }

   /*  unShiftItem(index){
        for (let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i + 1];               
        }
        delete this.data[this.length -1];
        this.length--;
    } */
}

const myHashTable = new hashTable(50);