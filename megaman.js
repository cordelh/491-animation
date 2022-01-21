class MegaMan {
    constructor(game) {
        this.game = game;
        this.animator = new Animator2(ASSET_MANAGER.getAsset("./megaman.png"), 
        0, 0, 49.5, 80, 8, 0.2);

        this.x = 0;
        this.y = 0;
        this.speed = 0;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x >200) this.x = 0;
    };

    draw(ctx) {
        //ctx.drawImage(ASSET_MANAGER.getAsset("./megaman.png"),0,0);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}