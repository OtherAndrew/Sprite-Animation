class Guy {
    constructor(game) {
        this.game = game;

        this.x = 0;
        this.y = 0;
        this.width = 32;
        this.height = 48;
        this.xSpeed = 75;
        this.ySpeed = 150;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./assets/guy.png"),
            0, 0, this.width, this.height, 4, 0.1);
    };
    
    update() {
        this.x += this.xSpeed * this.game.clockTick;
        this.y += this.ySpeed * this.game.clockTick;
        if (this.x > 960 - this.width / 2 && this.xSpeed > 0) {
            this.xSpeed *= -1;
            this.animator.yStart += this.height;
        }
        if (this.x < 0 && this.xSpeed < 0) {
            this.xSpeed *= -1;
            this.animator.yStart -= this.height;
        }
        if (this.y > 720 - this.height / 2 && this.ySpeed > 0) this.ySpeed *= -1;
        if (this.y < 0 && this.ySpeed < 0) this.ySpeed *= -1;
    };
    
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    };
}
