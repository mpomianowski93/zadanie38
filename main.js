let num1 = 10;
let num2 = 5;

let dodawanie = function (licz1, licz2) {
	if (licz1 + licz2 >= 0) {
		return 'wynik dodawania wynosi ' + (licz1 + licz2);
	} else {
		return 'wynik jest nieprawidłowy';
	}
};
console.log(dodawanie(num1, num2));

let odejmowanie = function (licz1, licz2) {
	if (licz1 - licz2 >= 0) {
		return 'wynik odejmowania wynosi ' + (licz1 - licz2);
	} else {
		return 'wynik jest nieprawidłowy';
	}
};
console.log(odejmowanie(num1, num2));

let mnożenie = function (licz1, licz2) {
	if (licz1 * licz2 >= 0) {
		return 'wynik mnożenia wynosi ' + licz1 * licz2;
	} else {
		return 'wynik jest nieprawidłowy';
	}
};
console.log(mnożenie(num1, num2));
