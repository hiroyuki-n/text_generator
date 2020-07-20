const result_area = document.getElementById("result_area");
//===
function width_generator() {
    const width = document.getElementById("generator_width").value;
    result_area.style.width = width + "px";
    document.getElementById("txt_width").innerHTML = width;
    document.getElementById("code_width").innerHTML = 'width: ' + width + 'px;';

}
//===
function fontSize_generator() {
    const fontsize = document.getElementById("generator_fontSize").value;
    result_area.style.fontSize = fontsize + "px";
    document.getElementById("txt_fontSize").innerHTML = fontsize;
    document.getElementById("code_fontSize").innerHTML = 'font-size: ' + fontsize + 'px;';

}
//===
function fontWeight_generator() {
    const fontweight = document.getElementById("generator_fontWeight").value;
    result_area.style.fontWeight = fontweight;
    document.getElementById("txt_fontWeight").innerHTML = fontweight;
    document.getElementById("code_fontWeight").innerHTML = 'font-weight: ' + fontweight + ';';
}
//===
function lineHeight_generator() {
    const lineheight = document.getElementById("generator_lineHeight").value;
    result_area.style.lineHeight = lineheight;
    document.getElementById("txt_lineHeight").innerHTML = lineheight;
    document.getElementById("code_lineHeight").innerHTML = 'line-height: ' + lineheight + ';';

}
//===
function letterSpacing_generator() {
    const letterspacing = document.getElementById("generator_letterSpacing").value;
    result_area.style.letterSpacing = letterspacing + "em";
    document.getElementById("txt_letterSpacing").innerHTML = letterspacing;
    document.getElementById("code_letterSpacing").innerHTML = 'letter-spacing: ' + letterspacing + 'em;';

}
//===
function textAlign_generator() {
    const textalign = document.getElementById("generator_textAlign");
    const textalign_value = textalign.btn_textAlign.value;
    result_area.style.textAlign = textalign_value;
    document.getElementById("txt_textAlign").innerHTML = textalign_value;
    document.getElementById("code_textAlign").innerHTML = 'text-align: ' + textalign_value + ';';
}
//===
function fontFeatureSettings_generator() {
    const fontfeaturesettings = document.getElementById("generator_fontFeatureSettings");
    const fontfeaturesettings_value = fontfeaturesettings.btn_fontFeatureSettings.value;
    result_area.style.fontFeatureSettings = fontfeaturesettings_value;
    document.getElementById("txt_fontFeatureSettings").innerHTML = fontfeaturesettings_value;
    document.getElementById("code_fontFeatureSettings").innerHTML = 'font-feature-settings: ' + fontfeaturesettings_value + ';';
}

//===
function fontStyle_generator() {
    const fontStyle = document.getElementById("generator_fontStyle");
    const fontStyle_value = fontStyle.btn_fontStyle.value;
    result_area.style.fontStyle = fontStyle_value;
    document.getElementById("txt_fontStyle").innerHTML = fontStyle_value;
    document.getElementById("code_fontStyle").innerHTML = 'font-style: ' + fontStyle_value + ';';
}






//===
function textDecoration_generator() {
    const textDecoration = document.getElementById("generator_textDecoration");
    const textDecoration_value = textDecoration.btn_textDecoration.value;
    result_area.style.textDecoration = textDecoration_value;
    document.getElementById("txt_textDecoration").innerHTML = textDecoration_value;
    document.getElementById("code_textDecoration").innerHTML = 'text-decoration: ' + textDecoration_value + ';';
}
