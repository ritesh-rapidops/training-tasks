class BallFactory{
	constructor(){
		this.createBall = (ballType) => {
			let ball;
			if (ballType === 'basketball'){
				ball = new BasketBall();
			}else if(ballType === 'football'){
				ball = new FootBall();
			}

			ball.roll = () => {
				`${ ball._type } is rolling`
			}
			return ball;
		}
	}
}

class BasketBall{
	constructor(){
		this._type = 'Basketball';
		this.bounce = function() {
			return `You bounced Basketball`
		}
		console.log('New basketball created');
	}
}

class FootBall{
	constructor(){
		this._type = 'FootBall';
		this.kick = function(){
			return `You kicked FootBall`
		}
		console.log('New football created');
	}
}

let ballFactory = new BallFactory();

let bb1 = ballFactory.createBall('basketball');
console.log(bb1.bounce());

let fb1 = ballFactory.createBall('football');
console.log(fb1.kick());
