let b1 = new ElectricLamp(false);
let b2 = new ElectricLamp(false);

let c1 = new SwitchButton(false, b1);
let c2 = new SwitchButton(false, b2);
for (let i = 0; i < 10; i++) {
    document.write('<br>')
   document.write(c1.switchOn)
   document.write('<br>')
    document.write(c2.switchOff)
}
