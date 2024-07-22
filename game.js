/* global Phaser */

import { cretaeAnimations } from "./animations.js";

const config = {
    type: Phaser.AUTO,
    width: 256,
    height: 244,
    backgroundColor: '#87CEEB', // Color azul claro como cielo
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
            debug: false
        }
    },
    scene: {
        preload, // Se ejecuta para precargar recursos
        create, // Se ejecuta cuando el juego comienza
        update // Se ejecuta en cada frame
    }
};

new Phaser.Game(config);

// Precargar recursos
function preload() {
    // Nube
    this.load.image('cloud1', 'assets/scenery/overworld/cloud1.png');

    // Textura de imagen piso
    this.load.image('floorbricks', 'assets/scenery/overworld/floorbricks.png');

    // Mario
    this.load.spritesheet('mario', 'assets/entities/mario.png', { frameWidth: 18, frameHeight: 16 });

    //cargar un audio 
    this.load.audio('gameover', 'assets/sound/music/gameover.mp3')

}

// Crear elementos del juego
function create() {
    // Mapeo de la nube
    this.add.image(100, 50, 'cloud1').setOrigin(0, 0).setScale(0.15);
    
    // Sprite de Mario
    //this.mario = this.add.sprite(50, 210, 'mario').setOrigin(0, 1);
    //sprite de Mrio con fisicas
    this.mario = this.physics.add.sprite(20,60, 'mario').setOrigin(0,1).setCollideWorldBounds(true).setGravityY(1000)
    //colision de elementos piso
    this.floor = this.physics.add.staticGroup()
    this.floor.create(0, config.height - 16, 'floorbricks').setOrigin(0, 0.5).refreshBody()
    this.floor.create(150, config.height - 16, 'floorbricks').setOrigin(0, 0.5).refreshBody()
    //establescer conlision con el mario
    this.physics.add.collider(this.mario, this.floor)
    // Piso
    //this.add.tileSprite(0, config.height - 32, 64, 32, 'floorbricks').setOrigin(0, 0);
    //piso con colision
    //this.add.tileSprite(100, config.height - 32, 64, 32, 'floorbricks').setOrigin(0,0)

    //limite del mundo 
    this.physics.world.setBounds(0, 0, 2000, config.height)

    //camara dimencion
    this.cameras.main.setBounds(0, 0, 2000, config.height)
    this.cameras.main.startFollow(this.mario)

    

    cretaeAnimations(this)

    // Teclas para mover
    this.key = this.input.keyboard.createCursorKeys();
}

// Actualizar cada frame
function update() {
    if (this.key.left.isDown) {
        this.mario.x -= 2;
        this.mario.anims.play('mario-walk', true)
        this.mario.flipX = true; // Voltear Mario hacia la izquierda
    } else if (this.key.right.isDown) {
        this.mario.x += 2;
        this.mario.anims.play('mario-walk', true)
        this.mario.flipX = false; // Voltear Mario hacia la derecha
    } else {
        this.mario.anims.play('mario-idle', true)
    }

    if ( this.key.up.isDown && this.mario.body.touching.down){
        this.mario.setVelocityY(-300)
        //this.mario.y -= 5
        this.mario.anims.play('mario-jump', true)   
    }

    if (this.mario.y >= config.height) {
        this.mario.isDead = true
        this.mario.anims.play('mario-dead')
        this.mario.setCollideWorldBounds(false)
        //this.sound.play('gameover').
        this.sound.add('gameover', { volume: 0.2}).play()

        setTimeout(() => {
            this.mario.setVelocityY(-350)
        },100)

        setTimeout(() => {
            this.scene.restart()
        }, 790)

    }

}
