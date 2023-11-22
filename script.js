var yazi=document.getElementById('textArea');
        function yaz1()
        {
            yazi.value=yazi.value+1;
        }
        function yaz2()
        {
            yazi.value=yazi.value+2;
        }
        function yaz3()
        {
            yazi.value=yazi.value+3;
        }
        function yaz4()
        {
            yazi.value=yazi.value+4;
        }
        function yaz5()
        {
            yazi.value=yazi.value+5;
        }
        function yaz6()
        {
            yazi.value=yazi.value+6;
        }
        function yaz7()
        {
            yazi.value=yazi.value+7;
        }
        function yaz8()
        {
            yazi.value=yazi.value+8;
        }
        function yaz9()
        {
            yazi.value=yazi.value+9;
        }
        function yaz0()
        {
            yazi.value=yazi.value+0;
        }
        function temizle()
        {
            yazi.value="";
        }
        function toplama()
        {
            yazi.value=yazi.value+"+";
        }
        function fark()
        {
            yazi.value=yazi.value+"-";
        }
        function carpma()
        {
            yazi.value=yazi.value+"*";
        }
        function bolme()
        {
            yazi.value=yazi.value+"/";
        }
        function nokta()
        {
            yazi.value=yazi.value+".";
        }
        function hesapla()
        {
            var sonuc;
            sonuc=yazi.value=eval(yazi.value);
            yazi.value=sonuc;
        }