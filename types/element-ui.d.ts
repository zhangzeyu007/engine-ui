/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-19 18:21:09
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-19 18:38:04
 * @FilePath: \engine-ui\types\element-ui.d.ts
 */
import Vue, { PluginObject } from 'vue'
import { ElementUIComponent, ElementUIComponentSize, ElementUIHorizontalAlignment } from './component'


import { ElInput } from './input'



import { ElElCity } from './el-city'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of element-ui */
export const version: string

/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(ElementUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** ElementUI component common definition */
export type Component = ElementUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = ElementUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = ElementUIHorizontalAlignment


/** Input Component */
export class Input extends ElInput {}



/** ElCity Component */
export class ElCity extends ElElCity {}
