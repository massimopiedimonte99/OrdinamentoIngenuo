this.addEventListener("DOMContentLoaded", () => {
    let row = document.querySelector(".row");
    let nums = [];

    for(let i of row.childNodes) {
        if(i.nodeType != Node.TEXT_NODE) {
            nums.push(i.childNodes[0].innerHTML - 0);
        }
    }

    for(let i = 0; i < nums.length; i++) {
        for(let j = i; j < nums.length; j++) {
            
            if(nums[i] > nums[j]) {
                let sp = document.createElement("p");
                sp.className = "sp";
                sp.innerHTML = "Prendo <i class=\"active\">" + nums[j] + "</i> e lo metto al posto di: <i class=\"active\">" + nums[i] + "</i>";
                
                document.body.appendChild(sp);

                let t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;

                let r = document.createElement("section");
                r.className = "row";

                for(let k = 0; k < nums.length; k++) {
                    let d = document.createElement("div");
                    d.className = "box";
                    let p = document.createElement("p");
                    p.innerHTML = nums[k];
                    d.appendChild(p);
                    r.appendChild(d);
                }

                document.body.appendChild(r);
                
            }
        }
    }

    let footer = document.createElement("footer");
    footer.innerHTML = "Massimo Piedimonte<br>ITIS Volta<br>2020";
    document.body.appendChild(footer);

});