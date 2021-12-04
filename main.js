const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field = [[]]) {
        this.field = field;
        this.locationX = 0;
        this.locationY = 0;
        //home position 0,0
        //this.field[0][0] = pathCharacter;
    }

    print() {
        const displayString = this.field.map(row => {
            return row.join('');
        }).join('\n');
        console.log(displayString);
    }

    //function to be prompted
    askQuestion() {
        const ask = prompt('Which way?').toUpperCase();
        switch(ask) {
            case 'U':
                this.locationY -= 1;
                break;
            case 'L':
                this.locationX -= 1;
                break;
            case 'R':
                this.locationX += 1;
                break;
            case 'D':
                this.locationY += 1;
                break;
            default:
                console.log('Presione U, D, L o R');
                this.askQuestion();
                break;
        }
    }

    //generacion del campo 
    static generateField(height, width, percentage = 0.1) {
        //primero los limites con arreglos
        const field = new Array(height).fill(0).map(el => new Array(width));
        for(let y = 0; y<height; y++){
            for(let x = 0; x<width; x++){
                //probabilidad randomica
                const prob = Math.random();
                field[y][x] = prob > percentage ? fieldCharacter : hole;
            }
        }
    }
}



const myField =new Field(Field.generateField(10,10,0.2));
myField.print();


