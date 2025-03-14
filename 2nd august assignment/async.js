<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>

console.log(" I ");
console.log(" eat ");
console.log(" Ice Cream ");

console.log("I");

setTimeout(() => {
    console.log("eat");
}, 2000);

console.log("Ice Cream");


let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let orderWithCallback = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected`);
        call_production();
    }, 2000);
};

let production = () => {
    setTimeout(() => {
        console.log("production has started");
        setTimeout(() => {
            console.log("The fruit has been chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
                setTimeout(() => {
                    console.log("start the machine");
                    setTimeout(() => {
                        console.log(`Ice cream placed on ${stocks.holder[1]}`);
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} as toppings`);
                            setTimeout(() => {
                                console.log("serve Ice cream");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 1000);
};

orderWithCallback(0, production);


let is_shop_open = true;

let orderWithPromise = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log("Our shop is closed"));
        }
    });
};

orderWithPromise(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    .then(() => {
        return orderWithPromise(1000, () => console.log('production has started'));
    })
    .then(() => {
        return orderWithPromise(2000, () => console.log("Fruit has been chopped"));
    })
    .then(() => {
        return orderWithPromise(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`));
    })
    .then(() => {
        return orderWithPromise(1000, () => console.log("start the machine"));
    })
    .then(() => {
        return orderWithPromise(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`));
    })
    .then(() => {
        return orderWithPromise(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
    })
    .then(() => {
        return orderWithPromise(2000, () => console.log("Serve Ice Cream"));
    })
    .catch(() => {
        console.log("Customer left");
    })
    .finally(() => {
        console.log("end of day");
    });

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("Shop is closed"));
        }
    });
}

async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected`);

        await time(1000);
        console.log('production has started');

        await time(2000);
        console.log("Fruit has been chopped");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

        await time(1000);
        console.log("start the machine");

        await time(2000);
        console.log(`ice cream placed on ${stocks.holder[1]}`);

        await time(3000);
        console.log(`${stocks.toppings[0]} as toppings`);

        await time(2000);
        console.log("Serve Ice Cream");
    } catch (error) {
        console.log("Customer left", error);
    } finally {
        console.log("end of day");
    }
}

kitchen();



    </script>
</body>
</html>