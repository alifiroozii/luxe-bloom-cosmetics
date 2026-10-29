import re

def clean_html_to_jsx(html_str):
    # Remove all <script>...</script> tags
    html_str = re.sub(r'<script\b[^>]*>.*?</script>', '', html_str, flags=re.DOTALL)

    # Remove all HTML comments
    html_str = re.sub(r'<!--.*?-->', '', html_str, flags=re.DOTALL)

    # Self-close void tags if not self-closed
    void_tags = ['img', 'input', 'hr', 'br', 'source', 'meta', 'link']
    for tag in void_tags:
        html_str = re.sub(r'<(' + tag + r'\b[^>]*?)(?<!/)>', r'<\1 />', html_str)

    # Class to className
    html_str = re.sub(r'\bclass=', 'className=', html_str)
    # for to htmlFor
    html_str = re.sub(r'\bfor=', 'htmlFor=', html_str)
    # tabIndex
    html_str = re.sub(r'\btabindex=', 'tabIndex=', html_str)
    html_str = re.sub(r'\bautofocus=', 'autoFocus=', html_str)
    html_str = re.sub(r'\bautocomplete=', 'autoComplete=', html_str)

    # SVG attributes
    svg_attrs = {
        'stroke-width': 'strokeWidth',
        'stroke-linecap': 'strokeLinecap',
        'stroke-linejoin': 'strokeLinejoin',
        'stroke-dasharray': 'strokeDasharray',
        'stroke-dashoffset': 'strokeDashoffset',
        'fill-rule': 'fillRule',
        'clip-rule': 'clipRule',
        'clip-path': 'clipPath',
        'viewbox': 'viewBox',
    }
    for old, new in svg_attrs.items():
        html_str = re.sub(r'\b' + old + '=', new + '=', html_str)

    # Convert style="..." to style={{ ... }}
    def style_repl(m):
        raw = m.group(1)
        rules = [r.strip() for r in raw.split(';') if r.strip()]
        props = []
        for r in rules:
            if ':' in r:
                k, v = r.split(':', 1)
                k = k.strip()
                v = v.strip()
                parts = k.split('-')
                camel_k = parts[0] + ''.join(p.capitalize() for p in parts[1:])
                props.append(f'{camel_k}: "{v}"')
        return 'style={{ ' + ', '.join(props) + ' }}'

    html_str = re.sub(r'style="([^"]*)"', style_repl, html_str)

    return html_str
