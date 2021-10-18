<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core"

type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonType = 'primary' | 'secondary' | 'danger'

export default defineComponent({
  name: 'Button',
  props: {
    onClick: {
      required: false,
      default: () => null,
      type: Function as PropType<(...args: any[]) => any>
    },
    label: {
      required: false,
      default: 'Click',
      type: String as PropType<string>
    },
    disabled: {
      required: false,
      default: false,
      type: Boolean as PropType<boolean>
    },
    size: {
      required: false,
      default: 'md',
      type: String as PropType<ButtonSize>
    },
    kind: {
      required: false,
      default: 'primary',
      type: String as PropType<ButtonType>
    }
  }
})
</script>

<template>
  <button :class="size + ' ' + kind" @click="onClick" :disabled="disabled">
    {{label}}
  </button>
</template>

<style lang="sass" scoped>
@use '../../sass/colors'
.button
  color: colors.$text
  border-radius: 500px
  border: 1px solid transparent
  &:hover
    cursor: pointer
  &:disabled
    cursor: not-allowed

.md
  @extend .button
  font-size: 14px
  line-height: 20px
  text-transform: uppercase
  padding: 13px 13px

.lg
  @extend .button
  font-size: 16px
  line-height: 1
  padding: 21px 56px 19px

.primary
  background-color: colors.$primary
  &:active
    background-color: darken(colors.$primary, 10)
  &:disabled
    background-color: darken(colors.$primary, 30)

.secondary
  background-color: transparent
  &:active
    background-color: lighten(colors.$background, 20)
  &:disabled
    color: darken(colors.$text, 30)

.danger
  background-color: colors.$danger
  &:active
    background-color: darken(colors.$danger, 10)
  &:disabled
    background-color: darken(colors.$danger, 30)

</style>