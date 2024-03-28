import { vuetify } from "~/plugins/vuetify"
import moment from "moment";
import { useAppStores } from "@/stores/app";
import { useSettingStores } from "@/stores/settings";
import { baseName } from "@/scripts/constants";
export function copyText(text, { target = document.body } = {}) {
    const element = document.createElement('textarea')
    const previouslyFocusedElement = document.activeElement
    element.value = text
    element.setAttribute('readonly', '')
    element.style.contain = 'strict'
    element.style.position = 'absolute'
    element.style.left = '-9999px'
    element.style.fontSize = '12pt'
    const selection = document.getSelection()
    const originalRange = selection.rangeCount > 0 && selection.getRangeAt(0)
    target.append(element)
    element.select()
    let isSuccess = false
    try {
        isSuccess = document.execCommand('copy')
    } catch { }
    element.remove()
    if (originalRange) {
        selection.removeAllRanges()
        selection.addRange(originalRange)
    }
    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus()
    }
    return isSuccess
}
export function switchTheme(name) {
    const settings = useSettingStores()
    settings.theme.name = name
    settings.save()
    if (name === "autosystem") {
        vuetify.theme.name.value = isNight() ? "dark" : "light"
        return
    }
    vuetify.theme.name.value = name
}

export function toggleFullscreen() {
    const app = useAppStores()
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        app.fullscreen = true;
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
        app.fullscreen = false;
    }
}

export function isNight() {
    const now = moment().hour();
    return now <= 7 || now >= 19;
}
export function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
export function updateCSSVariable(key:string, value:string) {
    document.documentElement.style.setProperty(`--${baseName}-${key}`, value)
}
export function de_escapeHTML(str:string) {
    var textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
}