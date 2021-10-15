const character_classes = [
  {
    name: "bard",

    features:
      "<h4>Bardic Inspiration</h4> <p>You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.</p> <p>Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.</p> <p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.</p> <p>Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.</p> <h4>Jack of All Trades</h4> <p>Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus.</p>",
    hitpoints:
      "<b>Hit Dice:</b> 1d8 per bard level <p><b>Hit Points at 1st Level:</b> 8 + your Constitution modifier</p> <p><b>Hit Points at Higher Levels:</b> 1d8 (or 5) + your Constitution modifier per bard level after 1st</p>",
  },
  {
    name: "barbarian",

    features:
      "<h4>Rage</h4> <p>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.</p><p>While raging, you gain the following benefits if you aren’t wearing heavy armor:</p> <ul><li>You have advantage on Strength checks and Strength saving throws.</li> <li>When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.</li> <li>You have resistance to bludgeoning, piercing, and slashing damage.</li></ul> If you are able to cast spells, you can’t cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.",

    hitpoints:
    "<b>Hit Dice:</b> 1d12 per barbarian level <p><b>Hit Points at 1st Level:</b> 12 + your Constitution modifier</p> <p><b>Hit Points at Higher Levels:</b> 1d12 (or 8) + your Constitution modifier per barbarian level after 1st</p>",
  },
  {
      name:"cleric",

      features:"<h4>Divine Domain</h4> <p>Choose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. The Life domain is detailed at the end of the class description and provides examples of gods associated with it. See the Player’s Handbook for details on all the domains.Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.</p> <h4>Domain Spells</h4> <p>Each domain has a list of spells — its domain spells — that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.</p><p>If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you.</p><h4>Channel Divinity</h4> <p>At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.</p> <p>When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.</p>",

    hitpoints:"<b>Hit Dice:</b> 1d8 per cleric level <p><b>Hit Points at 1st Level:</b> 8 + your Constitution modifier</p> <p><b>1d8 (or 5) + your Constitution modifier per cleric level after 1st</p>",

  }
];
