---
to: src/components/<%= category %>/<%= name %>/<%= name %>.stories.ts
---
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import <%= name %> from './<%= name %>.vue'

storiesOf('<%= category %>/<%= name %>', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { <%= name %> },
    template: `
      <<%= name %> />
    `
  }), { info: {} })
