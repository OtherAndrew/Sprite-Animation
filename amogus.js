class Amogus {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./assets/amogus.png"),
            0, 250, 180, 250, 12, 0.05);
        this.x = 0;
        this.y = 0;
        this.xSpeed = 150;
        this.ySpeed = 75;
    };
    
    update() {
        this.x += this.xSpeed * this.game.clockTick;
        this.y += this.ySpeed * this.game.clockTick;
        if (this.x > 1024 - 90 || this.x < 0) {
            this.xSpeed *= -1;
        }
        if (this.y > 768 - 125 || this.y < 0) {
            this.ySpeed *= -1;
        }
    };
    
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.5);
    };
}
