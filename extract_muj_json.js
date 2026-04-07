import fs from 'fs';

const html = fs.readFileSync('muj_dump.html', 'utf8');

// The "__NEXT_DATA__" holds all the prop configurations
const nextDataMatch = html.match(/<script.*?id="__NEXT_DATA__".*?>(.*?)<\/script>/s);

if (nextDataMatch) {
    const data = JSON.parse(nextDataMatch[1]);
    fs.writeFileSync('muj_dump.json', JSON.stringify(data, null, 2));
    console.log("JSON extracted and saved to muj_dump.json!");
} else {
    console.log("Could not find __NEXT_DATA__ script block.");
}
