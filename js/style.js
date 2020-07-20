const result_area = document.getElementById("result_area");
//===
function width_generator() {
    const width = document.getElementById("range_width").value;
    document.getElementById("txt_width").innerHTML = width;
    result_area.style.width = width + "px";
    document.getElementById("width_code").innerHTML = 'width: ' + width + 'px';

}
//===
function fontSize_generator() {
    const fontsize = document.getElementById("fontsize").value;
    document.getElementById("fs").value = fontsize;
    result_area.style.fontSize = fontsize + "px";
    document.getElementById("fontSize_code").innerHTML = 'font-size: ' + fontsize + 'px;';

}
//===
function fontWeight_generator() {
    const fontweight = document.getElementById("fontweight").value;
    document.getElementById("fw").value = fontweight;
    result_area.style.fontWeight = fontweight;
    document.getElementById("fontWeight_code").innerHTML = 'font-weight: ' + fontweight + ';';
}
//===
function lineHeight_generator() {
    const lineheight = document.getElementById("lineheight").value;
    document.getElementById("lh").value = lineheight;
    result_area.style.lineHeight = lineheight;
    document.getElementById("lineHeight_code").innerHTML = 'line-height: ' + lineheight + ';';

}
//===
function letterSpacing_generator() {
    const letterspacing = document.getElementById("letterspacing").value;
    document.getElementById("ls").value = letterspacing;
    result_area.style.letterSpacing = letterspacing + "em";
    document.getElementById("letterSpacing_code").innerHTML = 'letter-spacing: ' + letterspacing + 'em;';

}
//===
function textAlign_generator() {
    const textalign = document.getElementById("textalign");
    const ta = textalign.ta;
    const ta_value = ta.value;
    result_area.style.textAlign = ta_value;
    document.getElementById("textAlign_code").innerHTML = 'text-align: ' + ta_value + ';';
}
//===
function fontFeatureSettings_generator() {
    const fontfeaturesettings = document.getElementById("fontfeaturesettings");
    const ffs = fontfeaturesettings.ffs;
    const ffs_value = ffs.value;
    result_area.style.fontFeatureSettings = ffs_value;
    document.getElementById("fontFeatureSettings_code").innerHTML = 'font-feature-settings: ' + ffs_value + ';';
}
