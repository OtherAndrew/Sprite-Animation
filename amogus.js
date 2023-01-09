class Amogus {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./assets/amogus.png"),
            0, 250, 180, 250, 12, 0.05);
        this.x = 0;
        this.y = 0;
        this.speed = 150;
    };
    
    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;
    };
    
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.5);
    };
}
