# How to prepare and deploy a customized package

After you've made changes to your HTML, CSS and Javascript check them into Git.

Then you need to create a new Zipped package file.  The Zip will contain everything from the `UCSB/` folder.

Here is what the file tree looks like:

```
UCSB
├── README.md
├── css
│   ├── README.md
│   └── custom1.css
├── html
│   ├── README.md
│   └── home_en_US.html
├── img
│   ├── README.md
│   ├── favicon.ico
│   └── library-logo.png
├── js
│   ├── README.md
│   └── custom.js
└── showDirectives.txt
```

To prepare the package on MacOS (or other unix) use command line zip utility:

```
zip -r -X "UCSB.zip" UCSB -x "*.DS_Store"
```

on Windows ExLibris recommends 7-Zip.

Once you have your package file prepared log into Primo back office and visit the Customization Manager 

_Deploy & Utilites -> Customization Manager_

where you can upload your package and deploy it.  Primo back office will reject the package if it contains unexpected files or the directory structure is not right.

