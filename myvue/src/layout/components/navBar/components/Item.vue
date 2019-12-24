<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title, fontSize } = context.props
    const vnodes = []

    if (icon) {
        if(icon == 'dashboard') {
            vnodes.push(<svg-icon icon-class={icon} style="font-size:1.3em;margin-right:10px" />)
        }else {
            vnodes.push(<svg-icon icon-class={icon} />)
        }
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
