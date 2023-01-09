class Amogus {
    constructor(game) {
        this.game = game;

        this.x = 0;
        this.y = 0;
        this.width = 180;
        this.height = 250;
        this.xSpeed = 150;
        this.ySpeed = 75;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./assets/amogus.png"),
            0, 250, this.width, this.height, 12, 0.05);
    };
    
    update() {
        this.x += this.xSpeed * this.game.clockTick;
        this.y += this.ySpeed * this.game.clockTick;
        if (this.x > 1024 - this.width / 2 && this.xSpeed > 0) {
            this.xSpeed *= -1;
            this.animator.yStart += 250;
        }
        if (this.x < 0 && this.xSpeed < 0) {
            this.xSpeed *= -1;
            this.animator.yStart -= 250;
        }
        if (this.y > 768 - this.height / 2 && this.ySpeed > 0) this.ySpeed *= -1;
        if (this.y < 0 && this.ySpeed < 0) this.ySpeed *= -1;
    };
    
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.5);
    };
}
