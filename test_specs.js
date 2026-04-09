import { universities } from './src/data/universities.js';

let minPrice = Infinity;
let maxPrice = -Infinity;
let specs = new Set();

universities.forEach(uni => {
    if (uni.extendedDetails && uni.extendedDetails.programs) {
        uni.extendedDetails.programs.forEach(prog => {
            if (prog.specializations) {
                prog.specializations.forEach(spec => {
                    specs.add(spec.name);
                    
                    let p = 999999;
                    if (spec.price) {
                        const match = spec.price.toString().match(/₹?([\d,]+)/);
                        if (match) p = parseInt(match[1].replace(/,/g, ''), 10);
                    } else if (prog.priceRange) {
                        const match = prog.priceRange.toString().match(/₹?([\d,]+)/);
                        if (match) p = parseInt(match[1].replace(/,/g, ''), 10);
                    } else if (uni.budget) {
                        p = uni.budget;
                    }
                    if (p !== 999999) {
                        if (p < minPrice) minPrice = p;
                        if (p > maxPrice) maxPrice = p;
                    }
                });
            }
        });
    }
});

console.log("Min Price:", minPrice);
console.log("Max Price:", maxPrice);
console.log("Unique Specs Count:", specs.size);
console.log("Sample Specs:", Array.from(specs).slice(0, 20));
