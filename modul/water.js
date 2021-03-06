 var LivingCreature = require('./LivingCreature.js');
module.exports = class Water extends LivingCreature {

    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;


    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);

    }

    mul() {
        var newcell = random(this.chooseCell(0));
        if (this.energy >= 15 && newcell) {

            var newwat = new Water(newcell[0], newcell[1], this.index);
            waterArr.push(newwat);
            matrix[newcell[1]][newcell[0]] = this.index;
            this.energy = 5;



        }
    }


    move() {

        var newCell1 = random(this.chooseCell(0));
        if (newCell1) {

            var newx = newCell1[0];
            var newy = newCell1[1];
            matrix[this.y][this.x] = 0;
            matrix[newy][newx] = this.index;

            this.x = newx;
            this.y = newy;
            this.energy--;


        }

    }


    eat() {

        var newcell = random(this.chooseCell(3));
        if (newcell) {

            var newx = newcell[0];
            var newy = newcell[1];
            matrix[this.y][this.x] = 0;
            matrix[newy][newx] = this.index;

            for (var i in monsterArr) {
                if (newx == monsterArr[i].x && newy == monsterArr[i].y) {
                    monsterArr.splice(i, 1);
                    break;
                }
            }


            this.x = newx;
            this.y = newy;
            this.energy += 3;

        }

    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in waterArr) {
                if (this.x == waterArr[i].x && this.y == waterArr[i].y) {
                    waterArr.splice(i, 1);
                    break;
                }
            }

        }


    }








}