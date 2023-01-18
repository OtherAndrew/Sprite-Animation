class Amogus {
    constructor(game) {
        this.game = game;

        this.x = 0;
        this.y = 0;
        this.width = 200;
        this.height = 250;
        this.xSpeed = 150;
        this.ySpeed = 75;
        this.animatorR = new Animator(ASSET_MANAGER.getAsset("./assets/amogus.png"),
            this.width, this.height,
            12, 0, this.height, false, false, 24);
        this.animatorL = new Animator(ASSET_MANAGER.getAsset("./assets/amogus.png"),
            this.width, this.height,
            12, 0, this.height * 2, false, false, 24);
        this.animator = this.animatorR;
    };
    
    update() {
        this.x += this.xSpeed * this.game.clockTick;
        this.y += this.ySpeed * this.game.clockTick;
        if (this.x > 960 - this.width / 2 && this.xSpeed > 0) {
            this.xSpeed *= -1;
            this.animator = this.animatorL;
        }
        if (this.x < 0 && this.xSpeed < 0) {
            this.xSpeed *= -1;
            this.animator = this.animatorR;
        }
        if (this.y > 720 - this.height / 2 && this.ySpeed > 0) this.ySpeed *= -1;
        if (this.y < 0 && this.ySpeed < 0) this.ySpeed *= -1;
    };
    
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.5);
    };
}
