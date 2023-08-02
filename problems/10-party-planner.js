// Your code here
class PartyPlanner {
	constructor(guestList = [])  {
		this.guestList = guestList;
	}

	addToGuestList(name) {
		this.guestList.push(name);
	}

	throwParty() {
		if(this.guestList.length === 0) {
			return 'Gotta add people to the guest list';
		} else {
			let guests = this.guestList.join(' and ');
			return `Welcome to the party ${guests}`;
		}
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}