// Listing 3.1 - A gangster with a static property
class Gangsta {
    // shared between all instances of the Gangsta class
    static totalBullets = 100;

    shoot(): void {
        // to access a static variable, use <class name>.<static variable name>
        Gangsta.totalBullets--;
        console.log(`Bullets left: ${Gangsta.totalBullets}`);
    }
}

const g1 = new Gangsta();
g1.shoot();

const g2 = new Gangsta()
g2.shoot();