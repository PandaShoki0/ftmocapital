@if (env('BRAND_CODE', 'BT') == 'BT')
    <!-- Smartsupp Live Chat script -->

    <script type="text/javascript">
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'f918881d5a8a3e63506f0a64567cfce0d45f81b9';
window.smartsupp||(function(d) {
var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
s=d.getElementsByTagName('script')[0];c=d.createElement('script');
c.type='text/javascript';c.charset='utf-8';c.async=true;
c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
</script>
<script id="chatway" async="true" src="https://cdn.chatway.app/widget.js?id=VtwlRSUUM9MY"></script>
@else
    
@endif
