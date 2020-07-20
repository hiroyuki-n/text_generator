const result_area = document.getElementById("result_area");
//===
function width_generator() {
    const width = document.getElementById("generator_width").value;
    result_area.style.width = width + "px";
    document.getElementById("txt_width").innerHTML = width;
    document.getElementById("width_code").innerHTML = 'width: ' + width + 'px';

}
//===
function fontSize_generator() {
    const fontsize = document.getElementById("generator_fontSize").value;
    result_area.style.fontSize = fontsize + "px";
    document.getElementById("txt_fontSize").innerHTML = fontsize;
    document.getElementById("fontSize_code").innerHTML = 'font-size: ' + fontsize + 'px;';

}
//===
function fontWeight_generator() {
    const fontweight = document.getElementById("generator_fontWeight").value;
    result_area.style.fontWeight = fontweight;
    document.getElementById("txt_fontWeight").innerHTML = fontweight;
    document.getElementById("fontWeight_code").innerHTML = 'font-weight: ' + fontweight + ';';
}
//===
function lineHeight_generator() {
    const lineheight = document.getElementById("generator_lineHeight").value;
    result_area.style.lineHeight = lineheight;
    document.getElementById("txt_lineHeight").innerHTML = lineheight;
    document.getElementById("lineHeight_code").innerHTML = 'line-height: ' + lineheight + ';';

}
//===
function letterSpacing_generator() {
    const letterspacing = document.getElementById("generator_letterSpacing").value;
    result_area.style.letterSpacing = letterspacing + "em";
    document.getElementById("txt_letterSpacing").innerHTML = letterspacing;
    document.getElementById("letterSpacing_code").innerHTML = 'letter-spacing: ' + letterspacing + 'em;';

}
//===
function textAlign_generator() {
    const textalign = document.getElementById("generator_textAlign");
    const textalign_value = textalign.btn_textAlign.value;
    result_area.style.textAlign = textalign_value;
    document.getElementById("txt_textAlign").innerHTML = textalign_value;
    document.getElementById("textAlign_code").innerHTML = 'text-align: ' + textalign_value + ';';
}
//===
function fontFeatureSettings_generator() {



    const fontfeaturesettings = document.getElementById("generator_fontFeatureSettings");
    const fontfeaturesettings_value = fontfeaturesettings.btn_fontFeatureSettings.value;
    result_area.style.fontFeatureSettings = fontfeaturesettings_value;
    document.getElementById("txt_fontFeatureSettings").innerHTML = fontfeaturesettings_value;
    document.getElementById("fontFeatureSettings_code").innerHTML = 'font-feature-settings: ' + fontfeaturesettings_value + ';';
}
