<script> 
        const resultslist = document.getElementById('doxxedbozo')
        new URLSearchparams(window.location.search).foreach((value, name)=> {
            resultslist.append('${name}: ${value}')
        resultslist.append(document.createElement('br'))
        })
    </script>