import "../templates/dialogue.css";
import { useEffect, useState } from "react";
import NormalDialogue, { DialogueProps } from "./normal-dialogue";

const FloatingText = ({ text }: { text: string }) => {
  const maxWidth = window.innerWidth - 200;
  const maxHeight = window.innerHeight / 2;
  const [position, setPosition] = useState({
    top: Math.random() * maxHeight,
    left: Math.random() * maxWidth - 100,
  });
  const offsets = [
    -7000, -5000, -3000, -2000, -1000, 0, 1000, 3000, 5000, 7000,
  ];
  const random = Math.floor(Math.random() * offsets.length);
  const offset = offsets[random];

  // Function to update the position of the image randomly
  const moveImage = () => {
    setPosition({
      top: Math.random() * maxHeight,
      left: Math.random() * maxWidth,
    });
  };

  // Use effect to move the image at a regular interval
  useEffect(() => {
    setPosition({
      top: Math.random() * maxHeight,
      left: Math.random() * maxWidth,
    });

    const interval = setInterval(moveImage, 10000 - offset); // Move every 2 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        transition: `top ${(10000 - offset + 2000) / 1000}s, left ${(10000 - offset + 2000) / 1000}s`,
        color: "white",
        fontSize: "3em",
        opacity: 0.15,
        width: "100%",
        fontFamily: "PhantomFingers",
      }}
    >
      {text}
    </div>
  );
};

const GhostDialogue = ({ text, ...props }: DialogueProps) => {
  var floatingText: string[] = [];
  if (typeof text === "string") {
    floatingText = text.split("...");

    // hardcoded for fun
    if (text.includes("whisper")) {
      floatingText = ["☠ ⛧̷̛̛̪̫̠̼̘̳̥͖̹̖͚̪̬͎͎̩͙͙͌̅͑̇̍̂̃̒̇̎̂͆́̈́̃̓̊̅̀̓̋̃́̓̾̾̏͐̄̏̓͂́̎́̾̈́̎́́͐̀͗͆́̑́̉̆̅̌̉̐̄̑̊̾̒̆͊͐̌͒̑̏́̀̓̌̓̅̿̄͐̇̌̋͗̆̃̆̈́̆͑͛͆̔̏͒̉̓͆͛̏͗͋́͒̓̿̿̇̉͂̔͘͘̕̚̚͝͠͠͠͠͝͝ͅ ̶̢̢̡̧̡̡̡̨̨̢̧̢̨̢̧̡̡̡̢̢̧̨̨̨̡̢̧̡̡̛̖͇̻͇̼̙̠̳͙̙̠̳̼͓̗̜̙̗̣̖̣̩̬̘̝̮̳̞͖͕̱̣͎̦̗̭̟͔͇͇̙̹͎͍̳̠̮̺͎̻̲͇͓̯͕̫͇̱̫͓͖͖͚͚̰͖͚̣̠̫̼̗̫̺̺͙͇̠̫̜͖͖̩̮̝̙̘̙̜̥͔̫͙̭͍̬̞̝̝͉̲̬̥̮͚͖̘̼͈̝͖̪͖͎̟̝͚̪̪̣̟͈͎̻̘͉̺̜͇̼̣̱̥̯̰̼̳̞͕̠̹̝̯͕͈͉͍͎̩̘͙͇̞̦͖̪̯̱͔̲̩̻̮̲̳̫̖͎͓̪̩̩͙͈̺̠͇̬̰̖̺͍̩͎̩̣͕͙̣̤̖̥͍͎̣̲̭͖̼̺̰̦̫̻͇̩͕̜͚̦͎͙͇̟̘̖͎̹̻̪̳̗̝̤̰̰̫͈̭̤̰̟̮͇̼̬̞͖͓̥̯̩̉̃̀̄̉́̔̈́̎̽͊̔̽̈́̍̌͋̏͛́̅͊̔́͌̓̆̓̀̑̔̊̎̈̅̂̈̓̿̆̓̓̿̒̾̌͂͆̎̇̅͛̈́̅͗̏͊̔͒́̓͆̊̊̿̇͑̆̄̃̏́̈́͗͑̍́̑̓̽̒́̓͑̉̋̆̊̒̑̍̽́̽̐̀̒̊̋̀̒̈͒͌̊̉̕̚̚͘͘̚̚͘̕͘̚̕͜͜͜͜͜͜͜͜͝͝͠͝͠͝͝͝ͅͅͅͅp̷̡̧̧̢̡̡̡̧̧̧̡̧̡̧̧̨̨̢̨̢̢̛̛̛̛̛̛̰͙̼̻̻̗͈͕͕̘͍̼͕̠͍͔͚͚̰̳͔̪̣̺͇͔̩̲̟̝̤̘̳̩̤̩̤̱̳͎̱̱͍͔̰̱̥̜͇̗̳͙̫̬̬̝̝̮̖̭͓̝̦̩̠̣̲̱͈̠̮̖͖̠͉̱̮̳̹̥̘͇͈̳̰͈̱̯̜̫̳͈̪͓̪̮̤̠̺̺̣̘͎̬̟̱̼̖͙̬͎̣̬̗͚̰̲͎̫̮̤̯͎͎̻̩̞̜̖̩͖̰̥̝̱͖̠̤̘̟̣̜̺̫̲̤͓͉̼͔̱͎͎̼̲̮̪͔̻̦͈̫̲̮̲͚͓̜͓̝̦̝̗̖̹̻̮̼̱̺̠̟͍̳̞̺̩̥͈̰͕̻͎͍̜̜̭̱͚͙̥̱͚͖̪͍̲̂͗̂͑̊̒̒̆̈́̓̍͆͛̆͗̍̈́̋̏͗́̀́̂͂̊̉̐͌͒͋̓́̓͑͌̍̔̀̀̂̃̎̈̈́̓̐͑͐̌̆̑͊̿̃̈́̇̀̍̍̾̃́̔̿̽̉̆͛̑̑͐̀̃́̉̎̂̽͆̿͊̊̀͐̾͐̊͆̑̇̉̆̒̏̄̓̋̀̓͛̅̈́̏̓̉̀̂̃̀̎͊͌̄̐͆̈́̏̄͋͂͑̌̿̂̓̉̈́̈̀̾̍̓̄̐̏̿̒̉̋̃͗͑̀̓̓̄͗͑̂̌̐͋̌͋̀̅̔̋̀̋̈́̅̎̌͛̔͊̇͊̄̾͆͛̔͛̄̍̅̀̆͒̆̆͐͑͒̈́̿̿̍̉̈́̓̾͗̌͊̅̈̌̍̾̽́̔͑͑̚̚̕̚̕̚̕̕͘̕͘̚͘̚̚͘̚̕͘͜͜͝͝͝͝͠͝͠͝͝͠͠͠ͅͅͅͅͅͅͅͅͅͅǫ̷̢̧̨̡̢̨̨̢̨̡̧̡̡̧̨̨̨̢̨̨̨̡̨̨̢̨̨̡̛̛̛̙͎̫̰̹͙͚̹͔̙̬̙͎͚͕̮̺̪̦̜̫̦͖̟̮͖̲͕̭͎̠̠̮̭̟̠̼̜̭͚͍̗̱̮͚̭͍̱͔̼̬̬̰͙̞̖̖̤͔̗̻̤̞̻̙͙̖͓̜̬̻͎̤͎͇͖̻͉̻͈̻̤̬̪̹͇̬̲͎̠̣̪̣̥̫̤͔̞͍͓͕̗̝̪̜̞͉̝͕̼͕͈̭̭̝͖̘̲̜͎̠͎͚͙̖͇͕͓̝̬̘̺̭̝͔̫̳͔̭̟̩̯͖̖͎͕̠̥̙̹̹̱̬͎͍̣̮̲̳̻̰͕̫̥͍̬̖̠͈̫̻̦̘̘̹̹͍̦̖͕͔̠͙̬̜̟͔̗̩̞̦̠̜̤̦̰̱͔̗̣̗͈̪̲̣̜̝̥̫̲̻̣̲̠̙̠̳̲̤̩̫̟̥͎̫̪̘̪̣̫̫͉̫̮͕͕̭͕̖̣͖̙͓̖̜͓̟̲̜̥̓̓̅̈̋̈́͒̊̽̾́͑̃͂̑̊͊̉͑͂̏̎͐́̾́̾̌͂̓̓̊̓͒̐̍̓̏̇̈́̈́̇̑͒̀͛̈́̍̋̃̀͗̂̆̾̂̿͛̾̊̔̀̂̓̓̌̐́̈́͌̈́̄̑̍͗͐͂͗͌́͗̉̈́̔͑̿͒͊͒͌̿́͋͂͒̓̈̾͋͗́͐̔̋́̈́͂̑̈̄̈́̽͂̐͊̀̋̏͊̏͛͐́̑͗͒̐̾̾̍̊̈́̓̊̒̈̑̾̈́̐̅̊͆͗̈́̔̂͂̌̇̊̏͛̊͂̒̀̕̚̕͘̚̚̚̚̚̕̚͘͘͜͜͜͜͝͝͝͠͠͝͠͝͠͝͠͝͝͝͠͠͝͝ͅͅͅͅͅͅͅͅt̸̡̢̢̢̨̨̡̢̨̧̨̨̡̧̡̡̨̧̡̨̢͎͇͖̬̣͕̱̩͉̣̝͚͇͎͈̰̪̲͚̻̜̖̲͈̜͓̘͎͈̖̪̯̯͙̻͔̺̫̭̩͓͙̩͙̘̹̝̙̫͎̟̝̰͓͕͚̰͉̙͚͚̯̤̭̤͓̖̬̠͙̹͎̩̣̟̳̙̥͙͎͓̞̙̙̣̪̠̻̭͎̳̯̖̗̫͈̥͎̩̯̲̩̮͕͔͙̯̗̫̰̳̬̩̞̱̹̪̗̯̠̖̘͚̠̥̣̥̣͕̤̫̺̖͍̣̟͙̫͚̭̠͓̖͎͖̣͕̗̤̻͇̣͖͕̣͉͚͈̩̱͖͚̞̣͙͓̣̺͍͔͍͓̭̖̟̱̰͓̰̲̳̼̖̝͎̥͚̱͇̻͚̱͉͍̟͉̝̦̤̝̯̦͔̩̲̤̗͙͖̣̣̞͇͚͖̘̹̱͕͈̺̺͉̖̯͉̬̼̜͇͛̈̀̿͑̊͊͆̊́͂́̈́̿̽͛͆́̉̓͆͐̓̽̒̚̕͜͜͝͝ͅͅͅͅͅͅͅi̸̢̢̨̢̧̨̡̢̢̢̡̧̨̢̨̨̛̛̳̻̱͈̘̫̻̖̼̙͕̭̤̤̜̮̺̟̳͖̺̱̱̠̩̹̳̥̗̖̫̖̹̪̮͉̞̖̮̖͙̻̯̼̝͇̝͈̟̹̪͙̲͙͈̙͚̥͔̯͕̺̻̪̜̱͎̲̬͓̪͕͙͕̹͎̺̥͕̺̯̱͖̟͖͔͍͙̪͚͔̖̭͓̟̥̞̟̳͚̩̭̙̮̣͖̞̞̰̗̘̳̖̯͕͈͎̺̖̭͍͙̞͔̬͓̝͍̯̻̪͙̪͎̟̖͎̦͖̱̥͔͉̥̬̣̳̮̣͙̗̳͎͐͒̊̋͌̈́͋̓͑͒̽͒̓͆͒͐̇̽̊̈̐̍͒͛́̌͗̄̐̋̈́͑̓̓̒̎̌͐͗́́̇̌̿͋̀̀́̂̿́̉̆̆̈́̕͘̕͘̚͘͘̚͘̚͘͘͘͜͜͜͜͜͜͝͠ͅͅͅͅͅơ̶̡̧̧̢̢̢̧̡̨̧̨̨̢̧̢̡̡̛̲̘̬̰̜̺̰̻͉̥̬̪͔̮̠̺̺̗̮̥̤̣̣̰̞̪̟͈̟̞͕͇̼̳̣̠͓̹͉̝͙̗̼̖̻͔̰͇̖̝̠͍̳̯̗͎̰͈̗̦̝̙̪̫̪̲̫͎̼̠͔͎͕̬͎̫̙̜͈̫̟̲̯͖͉̣̱̟͓͕̣̟̝̻̟͓̪̹͓̳̗̪̜̬͖̻̣̣̲̜̦̘̖͓̺̬͉͙̜̤̫̰̙͇̻̟͓͖͖͙̝͎̳̪̲̠̩͈͙̳͖͍̘̲̪͙̜̰͙̭̜̲̪̠͔̖̙̞͇͚͖͕̞͚̥̯̰̖̬̲͓͙͍͓̗͔̫̹̝͉̞̖͚͎̯̱̼̟̤̞͕̯̟̻͚͉̩̫̠̗̹̹̺͎̼̬͚̯͙̤͈͇͓̲͎̊̑̐̀͌̄̿̇̀̌̽̐́͐̌͗͋͑̓̾̂̉̄̔̎̂́̒͐̌̈́̍̊͛͑̅̅̑̉́͋͂́̽̊͐̌̓̈́̍̍̅̇̂̔̈́́̍̊̐̉̈̈́̉͛͛͆̆̂͛̈́̍̑͘̚͘̕̚̕̕̚͜͜͝͠͝͠͝͠͠ͅͅͅͅͅͅͅͅn̶̡̡̨̢̢̧̡̧̢̢̢̛̛̛̛̛̛̛̛̘̦͔͖̠͖̠̮̻͍͈̜̺̠̦̠͙͍̦̪̠̱̥̹̖̹̼͔̫̲̠͓͖̖̙̜͎͍̣͚͎̗̦͎̥̺̫͕̥̤̯̯͇̠͉̝͕͇̦͖̤͔͕͚̰̘͚̩͇̪̪̳̅̔̓̋͗͛̄͛͆̓͆́̅̒̅͐̒̓̒͗͊͗̀́̄̒̈̆̈̋̀̀̾̈́̌̏̇͒̌̇́́́̆̆̄̆̏̿͐͛̊̈́͗̾̓̉͐͌̑͐̈́̀́͑̂̍̈́̒̈́̆̋̏̄́̇͒͑̀̉̀̃̂̂̏̐͐̾̃̂͂̈́͌̇̾͐̈͛͒͗͑̇͐̍͑̅͑͐̆͒̽́̌͂̆̽͊̆̆̉̈́̍̌̽́́̆̈́͋̾͆͋͑̍̏̄͂́̇̿̈́͂̄̍͗͛͑̍̉͛́̓̓̂̈́̌͌̾͒̇̐͒͌͌̀̓́̔̍̎̄̄̅͋̈́̋̄̓͐̈́̌͘̚͘͘̚͘͘͘̕̚͜͝͝͝͝͠͠͝͝͠͝͝͝͝͠ ̶̢̧̨̢̢̢̹̗̪͖̜̮̰̭̰̘̻̯̳͍̰͉̳̙͈̮͔̠̩̪̝̦̗̩͇͎̞͍̙̘̭͔̱̪͎̱̥̭̮͇͈̞̠̖̳̳͖̠̦̱͚̰̙͕̗̤̩̫̟̳͓͇̝͍̦͚̬̫̫̘͍̦̺̺̥̩̜̗̼̖͖̣̗͍͙͕͎̠̙̲̱͕̻͚̜̹̤͎́̀͊̓̀̾̓̈͋̋̊̈́͋̏̀̀́̈́̾̿͒̈̌̇̔͗̉̈̋̀̃̀́̍̃͊̽̐́͛̍̽̾̍̋̋̅̓̿́̿́̅̃̐̇͋̉͒̒̔̊́̏̇̈́͋̋̔̈̈́̏͆̀́̐̎͆̄̌͒̔̎̀̅́̅̂̃̃̉̉͑̎̈́̈̍́͒͛̀̏́̓̿͌̀̂͆́̈̀͑͗̈́́̎͐́̏͒̋̀̔̍̍̿̂̄̈́̈́̃͐̂̈͑̈̐͆̃͋͑͆͊̉̀̌̐͆̍͌̍̐̔̍̉̋̿̆́͊̒͌̔̂̾́̈̈́̏̓̕͘̕͘̕̚̚͘̕͘̚͘͜͜͜͠͝͝͝͝͝͝͝͠͠ͅͅͅͅψ̸̢̧̧̡̡̡̡̡̨̡̨̨̧̧̨̢̛̛̛̛̛̖̼̭̮͖͈͈͖͎̦̜̤̯͔̘̹͎̟̞̦͖͕̘̺͇͙̗̖͈̜̬͈̹͍̘̦̪̣̘̦̮̞̼͕͙͓̮̹̘̙̹͎͕̮̮̻͇̪̭̻̪̜͓͉͖͚̖͎̭͍͔̫̹͙̰͔̭̖̝̜̲̘̜̭̭͕̯̞̦̹̝͖̲͎̫̗̖͕̩̪̩͕͚̻̘̩̹͙̜̲̮̮̯̦͍̬̜͇̘̤͈̟̖̺̜̗̪̘͎͎̮̰̞̰̩̟̞͚̠̦͔̻̟̤̘̮̹͎͓̼̭͓̤̭̞͈͈̦͈̭͎͍͙̺̖̱̮͇͍̟̜̭̙͔͎͔̩̥̺͎̫̥̞̻̻̳̳̫̪͍͕̲̜͔̪̩̯̙͔̲̖̩̝̩̭̘͛́͌̈́͂̄̒̔͛͊͂͌̎̇͊̇̑͌̎̎̓̍̄̈́͒̃̅͐́̏͌̊́͑̈́̽̾̑̓̂͋̈́̀̎̋̒̄̉̊̉͗́́̅͌̈͛̑̽̂̌̔͂͒́̿̃͒͆̍̌̐̓͐́̑͐͌̓͑̒̄̄͒́̇͂̆̀̑́͆̅̀̈́̌̿́̈̑̑̓̆̄̄̅̿͛̈́͗̆̉͆̃̇͆̀͒̉̏́͌̎̊͆̈̀͐̊̑̔̃̀́͐̆̀͋̑͘̚̕̕̚̕͘̚͘̚͘̕̕͜͜͜͜͜͜͜͜͜͜͝͝͠͝͝͠͝ͅͅͅͅͅͅ ☠", "☠ ć̸̡̡̡̨̡̨̨̢̡̢̨̧̧̨̡̡̡̨̨̨̡̛̱͍͉̞̟̜̱͈̦̪̟͓̩̙̣̙̞͎̥̟̺̙͍̲͇̖̘̭̮̙͇͕̲̼̞̖̦̥̮̟̻̹̹̟̯̻̙̝͕͕̱̜̦̺̼͎̯̫̤̬̭͕͓̱̫̭̤͎̝̻͇̭̲̙̳͉͙͇͚̻̪͓͈̰̣̖̹̣̟̬̳̜̖̪̥͓̼͚̳̗͚̼̜͖̫̼̦͕̳̰̩̫̯̤̩̦͈͇̳̳̙͇̤̘̦͔̝̰̲͕̫͉̦̫̟̫̰̱͎̰̖͎̜͓̫̬͓̯̞̬̞͍̱͙̖̩̮̟̠̗̰̗̪̩̥̮̝̳̹̟͓̠̖̘̜̤͍͉͔̪̬̙̭͓͇̤̦̪͖̲̫̰̻̼͍̖̯̼̺̺̞̟͓̰̬͍̱̹̲̭̖͍̭̺̥̥̳̤̜͎̖͓̖͍̙͉͇̋̈̈́͂͌̐̏̑̄̓͛͊̂̈́̒̃̒̾̈̀̿̉͘͜͜͜͝ͅͅͅͅͅͅͅͅȩ̵̛̛̛̮̱̟͂̔̉̔̉̈́̿͛́̈́͒̇͐͒̇͋͛̊͂̈͛̄̊̅̄̈́̍̎̏̂̓̌̅̑̒̌̏̈́̐̈́̂̂̈͐̽͆̆͌̂̇̌͋̀̀̽̊͑̐͂̑͊̈́̀͑͋̊̑̅̎̾͐͗̏͊́̃̓͆͒̓̓̍̓̈̎͆̈̔̍̆̓̑̎͋͂͂̇͛͋͛̒̃̔͂̿͌͑̏͊͊̒̅̅͌͊͗̉͗̒̀̒̆̄̓̏͛̏͐͆̽̊͗̐̄̽̌̐̈́͐̂̑̓̀̌̿̾̃̆̀̇͌̂͋̊͛̂̿̾̈̾̔̀̽̚̕͘͘̕̚̕̕̚͝͝͝͠͝͝͠͝͝͝͝͝͝͠͝m̶̧̢̡̧̨̡̡̨̢̡̢̨̨̧̡̢̛̛̛̛̛̛̙͚̲̰̗̺͇͓̞̱͇̯͈̼̯̗̺̤̝̯̙̲͇͖̦̦̯̱̬̲͔̯̦̖͈̟͉͎̮̥̜̰͎̣̭͓̯̰̻̝̣͍̠̥̘̳̟͕̣̪̠̝̬̫̙͉̞͚̪̠̼̰̪̙̪̣̫̗͍̩̭̼͔̹̻̗̭̹͇͖̫̲̠͎̯͇̖̘̲̪͇͈̩̞̯̣̻̳̳̥̼͇̜̱̬͚͍̪͉͙͚̰̩̪̺͕̝̳̞͇̯̯̬͚͖̣̘̘̯̳͙͎̳̩̥̞͚̱̹͔͓̦͖̬̖̙̪̩̘̪͓͉̼̣͉͙̗̬̞̺͔̘̬̠̪̤̳͕̜̰̝̙̮͉̫̩̙̯͖̺̭͖̪̤̹͈̻̪̰̤̞̙̥̜̬̫̭̖͓̝̬̳͍̖̺͖͓̩̤͉͙͚͉̈̑̿̏͋̔̃̆̍̌̏̉̀̋̍̆̀̾̊́͊͛́̿̓͆̎̽͋̀̿̔̌̓̆̏̉͋͑̅̾̿͑̈́̂̈́̀͋̄̔͒͊̄̈͑̊̀̓̏̃̐̿͂̎̌̅̔͐͐̓̈́́̽̈́͛̆̋̓͋̓́̐̓̐̈́̑͛̀̀̈́͒̄͗͂̔̍͛̈́̀̏̔̓́͗͌̂͒̏͌̇̋̄̎̽̐̀͗̈́̇̇͒̐͊̓͐̈̀̎̈́̋̉̄̓̆͑̔́̇́̐̿̔̍̊̈́́̐̏̄͆̏̾̾̉͛̃̃͂͒͌͐̋̇̾̈́͗͋̐̔̈͐͛͛̅̑̈́̚͘̚̕̕̚̚̚̕͘̕̕͘̚̚͘̚̕͘͜͜͜͜͝͠͝͝͝͝͝͠͠͝͠͝͠ͅͅͅͅͅͅͅẹ̸̢̧̢̢̢̢̛̛̛̛̯̤͍̙̟̟̘̹̮̱̳̲̩̝̖̲̪̠̙̖͙̩̰͈̳͓̹̰͉̙̬̻̼̪̘̳̬̝̟̥̠̙̥̰͓̐̑̏̆͛̃͌͗͆̉̆̆͊̎̓̄̈́͑̽̍̇͊̀̾̽͗̀̓̂͛̍̈̍̄̊̄̅̆̑̇͋͂̀͐͗̃͗̊͆͐̀̍͌̾̓́̅̾͊̏͑͋̽̏́̒̐̄͛̈̑̍̈́̌̊̃̑̐̑͂̓̄̈́̈́͊́̊̂͗̂̈́̌͐̋̓́̃̓͛̾̽̈́̾̐̈́̎̈́̍̾͆̍̌̂͌́̊̊̈́͐̏͗͌̉͊̃̿̈́̒̍͗̉͆͛͐̿̂̈́̀̽̇͒̔̾̉̈͂̏͌̓̅̄̐̓̉̽́̇̑̈́̿̀͑͐͌̌̀̀͋͊̓̔̓́̀̀̎̄̐̈́̃͘͘̚͘̕̚͘̕̚͘̚̕͜͠͝͝͠͝͝͠͝͝͝͝͝ͅţ̷̨̧̛̛̛̛̛͍̭͎͔͙͉͙̙͉͎̮͙̳̱̭̙̥̘͙̬̮̮̠͔̩͙̻͓̬̳̝̠̪̜̖̙̹̣̥͕͈̼̼̭͈͎͉̜̞̘̳̓͂̔̀̂́̑̔̀̈́͒̓̔̎̎͊̒̈́̔̎̿͋̀̈́̀̃͗͐̈̏̋̄̈́͊͐͋͛̓̃͗̈͒͗͑͆̄̃͊̅͐͗̎̇̂̔͒̔̄͑̀̀͋́͊̉̀͛͒̓͒̈́́̒͒̄̈́̄̈́̄̋͊͒͊̄́̂͂̿̈́͛̎̆̃́̋̉̆̈́͂͗̆̇̈͂̋̈́̀͂͒͊̓̈́̌́̏͗̐̑͂̄͐̑̿̌͗͂̎̏̀̀͌͒͗̔̍̓͂͑̈́͋́͘͘͘̚̕̕̚͜͝͠͝͝͝͝͝͝͝͝͝͠ͅͅͅe̸̢̨̡̨̧̨̛̛͕̤͓̭̭͙͈̤̠̦͖͈̺̱̟̹̰̜̯̮̜͚͔̪̱̲͕̩̼̰̬̗̠̬͔͕̰̟̬̙͈̬̻̲̗̪̗̦͔̻̼̪͕͎̞͙̟̱̲̲̠͍͈̍̾̒̌̐̋͂̆͂́̌͆̂́̋̓̂̂̽̔́̄͂̈́͑̄͋̀̒̽̊̔̋͒̊́̅̐̃̏͒̒͒̊̐̓͌̈́͋͗̑͒̊́̇́̒̐̐͐̉̀̎͛͐͌̊̇̄̓̈́̔̽̈́̎̈́͛̔̀̒̽͌̿̈́̑̍̍̔̋̾͒̎͗́̚̕̕͘͘͘͜͠͠͝͝͠͝͝ͅͅŗ̶̧̢̢̢̡̧̡̨̢̨̧̧̨̢̛̛͈̻̟̝̦͕̖̗̪̙̥̙̝̖̳̘͎̮̘̲̤̦̳̮̻͈͖͚͖̫̭̩͔̙̘͔͇̥̰̞͙̪̬͕̦̲̙̦̝͎͉͈͕̯͓̹̠̰̗͙̘̙̰͕̺̼͕͙̤̯͎̙͕̥̮̪͙̼̖͓͙̝̙͔̦͕͍͉̙̭̥͉̱̪̥̤̘̠̭̟̥̲͖͍̹̙̣̥̘͚̟̩͕̠̥̮̪͖̠͉̟̱͍̼͚̩͖̞͙̥̪͚̤̟̪͔̰̲̼̻͈͔̥̖͍̥͍͙̳̻̤͈͍͇͓͖̳̟̖̭͙̺͇͖̘̣̘͈̯͈͚͙̝͚͙̙͍̲̣̦͇̥̰͔̼̩̠̮̔̿̐͐̓̒̋̐̉̾̊͌̓͂̆̅̓͐̀̾͆̂̄̊͘͜͜͜͜͜͜͝͝͝ͅỷ̵̨̧̡̡̨̡̨̨̨̡̧̨̢̨̨̧̨̨̨̨̪̻̖͓̖̣̲̬̺͖̹̻͖͎̦̳̙͔͓̺͇̰͈̖̞̪̰̮͎͚̩͉͔̘͚̭̹̙̰͚͈̯͉̩̩̻̜̩̼̗͔͉̻͕̬̺̱̗̝̲͚̬̲̼̜̥̭̥̳̙͍͇̦͔̮̮͔͙̰͇̳̫̩̮͙̫̞͉̖͚̪͈̺̞̝̲̹̯̤͎̮͓̰̞̙͉̳͇̣̣̗͇̗̠̘̻͍͙̥͈̯̟̤͉̲͕̯͚̻̤̘̫͓̮̳͔̜̮̹̹̺̜̭̺͍͕͉͈̞͚̼̗͕̻̟̱̹̝̬̥̠͖͉̗̮̲̲̯͓̥͎̺̪̣͚̥͈͖͙̘͓̼̗͚̖̠̗͉͖͚̼̫̗͕͓͍̦̬͎̫̰̪̪̞͇͙̪͈̳͖͓̙͓͈̯͕̩̯͇̫͙̲̖͉͉̲̯͓̜̮̦̬͓͚͇̻͓̰̜̗̬̞̰̰̯͎̐̈́̒̄͑̍̈̎̎̍͒͒͋̿͆͒̈̏͆̆͑̊̓̈́͊̽̎̀͊̈́͛̊̓̅͆̈́͐͋̐͑̆͆͌̑̓̊͊͆͊̊̒͂̓̌̋͗̒͆͑̽͂̄̑̓͂̌͑̃̏́̔̍͒̈̋̒̿͑́̇̈́̆̎̉̈̇͂͛͋̈͑͘͘̕͘͘̕̕̚̕͜͜͜͜͜͜͜͜͜͝͝͝͝͠͝͝͠͝͝ͅͅͅͅ ψ", "ψ c̵̛͍͕͈̯̳̯͚̙͎̞̥̗͇̳̗̮͙̰͍̠͔̒̇̍̈́̓͋̀̈͑̍̽̃̾͋͌̐͒͌̄͌̄̇̏̆͗̇̍͛̀̀́̂͌̒̌̐͂͒̀͒̉͋̒͋́͑̆́̈́̆̕͘̚͝͝͝͝a̸̧̢̧̢̢̧̡̢̛̛͇̳̝͇̞̲̭̠̫̘͕͚͎̭̳͖̣̫͙̮̳̖̬̯̰̤̺̻̬͎͙̟̠̯̳̭̠̤̻̼͓̯̱͙̜̻͓̬̼͚͍̖̞̤̟̺̱̯̫̮̱̖͎̟͈͍͕͎̓̈̒͐̊̈́͌̋̈́̈́̏̇̄̃̒͋̀̎̈̌͋͗̾̉̆́̀͗͐͒̋̀̔̇̾͂͗́̉̊͛̐́̇͐͆̈̾́͑̆̄̏̐̑̔͐̿̉͊̿̑̽́̅͋̅̑̾̏̀̈̊͌́͆̊̇̇̑̅̓͑̈̎̓̈́̈͂̈́͑̄̑̉́̑̉͗͊̀̀̚̚͘͘̚͘͘͘̚̚͘̕͠͝͝͝͝͝͠͝͠͠͝͝͠͝͝͝͠ư̸̢̢̨̡̢̡̧̡̡̡̧̨̡̨̨̡̨̧̧̧̢̨̧̡̧̡̡̛̞̙̞̖̘̭͎̱͎͓̞̥̪̜̟̥̖̮̞̮̟̲̬̼̺͔͇̱̬̤̱̙̰͚͙̭͙̱̠̜͚̼̭̘͙͇͔̞̥͉͚̪͓̩͓̰̬̣̜̲̗̺̱̝͇̼͚̮̼̩͇̟̫͈͇̦̝̩̙̣̞̪̰̥̺̫͈̬̳̞̻̭͔͕̱̝̪̞̝̬̩̟̜̹̜̼̯͈̟̘̙͈͍̖̤͖̦͚̺͙͚͚̩̼̼̥̮͇͔͖̙͖͓̝̦̝̩͚͎͇͎̖̤̻͖̝̯͇͉̜̹̝͕̼̥͔̝̰̯͓̤̟̠̻͈̤̹̩͚͙̠͕̠̥͖̟͇͓̜̻̜̟͖͙̻͙̪̼͉̜̪̟̬̠̫̘͈̦̯̜͔̖̠̻̮͚̹̪̲̼̭̱̩̾̀̍̀͊̉̍͐́̄͐̎̇̔̀̽̂̐̔̃́̔͒͂̏͑̐͆͂́̊̎̃́̐͂̀͌͆̓̈́̍̑̒̐̋̉̆̓̇͐̔̈́̈́̀́͐̉̈́̇̄̇̔̕͘̚͘͘͜͜͜͜͜͠͝͝ͅͅͅļ̶̨̧̧̢̡̡̨̧̡̡̡̨̟͔͔͚̞̮̟̲̙̰̩̞̤͚̺͉̼̖̘̝͓̘̘̹̣͚͍̖̫̼͕͓͔͙̱̘̘͎̙̺̘̲̜̘͓̫̮̦̗̗͚̰͇͕̞̙͚̤͚͙͖̥͉̙̬̭̯̣̤̝̬̦͇̳̠͉̼͈̜̻͙͚̩̩͈̼͍͎̱͈̹͔̹̞̻̹͕̗͓͖͍̙̬̜̠̼̗͚͚̱͓͈̜͍̺͖̣̪̘̯̜̪̥̞͖̺͓̟͙̣͓̳͖̺̤̮̗̙̩̫̦͓̘̰͖͖͚̗͖̘̱̩̹͙͍̥̩̭̳̯̝̤̰̝̯͇̻̱̥̙̩͎̖̳̟̼̯̦̼̟͓̪̬̬͙̦̘̠̠̤͉̼̦̙͇̎̆͌̓̊̽̿̑͗̊͌̒̽̉͋͒͛̍̿̋͘͘̚͘̚͜͜͜͜͠͝ͅͅͅd̸̛̛̛̛̛̛̦͓͔̿̌̃̄͌́͂̍̈́̀̈́̆̑̽̇̃̅̃̋͛̍͂̋̇̂͑̇̓̂̋̐̀́͊̐̾͛̋͒̾̆̏́̓̈͒̈͊͐̉͗̃́̊̏̾̂͆͒̒̆̐͂̋̂̀̈́͛̅̂̋̏̄̋̀͆̈́̎̒͑̉̐͒̐̀̂̔̈́͌̋͋̄̓̈̓̄̿́̓͑̔̍͛̆̅̍̀̐́͒̎̈́̂͒͂̓̐͊̿͆͋́̿̆̽̔̒̓̑̈́͌̓̒̍̇́̈́́̋̓͗̿̏̽̉̈̿͑̓̒̆̂̓̄̿͊̓̂̿̐̑͋̄̇̀͒̋̈̓̔͋̓͑͐̈̑̔̉͐̇̄̄̄̀̎̎̽̉͂̀̆̿́͗̾̓̉̔̊̈́͋̍͂̋̽͒̈̽̓̉͌͐̉̈́̿̕͘͘̚̕̕̚͘̕̚̚͘͝͝͝͠͠͠͝͠͠͝͠͠͠͝͠͝͝͠͝ŕ̴̨̨̢̨̢̡̨̡̨̢̡̧̢̧̨̡̨̢̧̧̧̛̟̥̲̗͍̞̺̦̟̘͙̤̗̜̱̥͎͚̘̘͈͎͇̠͔̫̻̞͖̫̱̝͚̰̤̖̙̝̙̖̣̺͚͔͕̩̭̗͖̙̣̯͈̰̩̟̠̞͙̻̟̱̘͓͎̮͙̺̹̜̘̭̞̗̯̦̼͉̺̳̦̥͚̦̭̜̬̖̺̦̙̩̰̘͎̠͔̥̪̖̮̻̱͕̥̗̦̫͍̱̗͉̠̙̙̼̦̯̩̙̳͍͓̝͉̟̝̲̳̖̭̗͓̻̼̣̟̝̭͍̱̥̣̣̹̺͙͇̺̹̯̹̺͎͎̙̺̟̖͉̘͍͇̱̦̞̠̖̪̘̤̙͕͔̪̪̲̺̗̥͈̬̪͔̞̼̠̹̭͖͙̖͈͕͍͎̺̯͔̦͇̜̱̫̤̞̺̖͓͚̯̻͉̞̈̔̈́̿͆̂̆̏͐̇̋̾̑͋̄̽́̂̄̀̓̃͂͘̚͜͜͜͜ͅͅͅͅờ̶̧̧̦̼̪̲͚̠͉̪̬̦̫̜̤̥̞͈̮̈́̾̅̒̈́͊̎͛̈́̆̽̀̉̉̇́̽̓̾̌̋̅̒͗̄̑̎̓̿̉̓́̕̚̕̚͠͠ņ̵̡̧̡̢̨̡̨̨̨̯̳̖͙̩̘̱̼̟̲͙͇͉̖̻̗͔̦̰͎̣̬̜̞̖̦͔̠͉̳͉̩̯̲̫̺͔͉̱͓̭̦̦͇͕͍̼̤̼̫͉͈̣̩͎͎̻͚͚̺͕̤̗̼̪̹͎̰͙͎̦͕̥͎͈̣͉̗̣̹͎̯̘͚͓̻̤͙̭͈̯̯͚̳̦̯͖̣͇͕̼̹̞̗̩͕̬͈̱͖̯͔̤̙̩͉̞͖͈͓̰̖̜̬̠̦̪̜̝͎̱̮͕͎̰͍̰̘̩̮͕̲̣̺̖͕̻̘̖̳͎͙̠̦̙̮͇̝͔̥̜̝͓͖̠͖̓̌̓͐͒͂͛̈͛̈͛͋̎͋̅̓͋͒̽̽̇̓̄͋́͊̊̌̿̂̂̄́́́͑̓̍̐͋̾̐̈͗́̏̀̓̏͆̂̎̔͐̍̌͑̍̃͋̏́́͌̅͆̽̀͐̀͐̓͋̌̒̐̕̕̚̚̚̕̕̚͘̕͜͜͜͜͜͠͠͝͠͠͝͝ͅͅͅͅ ⛥"]; // This is hardcoded for fun
    }
  } else {
    floatingText = text;
  }

  floatingText = floatingText.concat(floatingText).concat(floatingText); //.concat(floatingText)

  // another thing hardcoded for fun
  if (text == "🥺") {
    floatingText = floatingText.concat(floatingText);
  }

  return (
    <div>
      {floatingText.map((t, i) => (
        <FloatingText key={i} text={t} />
      ))}
      <div style={{ opacity: 0.5 }}>
        <NormalDialogue text={text} {...props} />
      </div>
    </div>
  );
};

export default GhostDialogue;