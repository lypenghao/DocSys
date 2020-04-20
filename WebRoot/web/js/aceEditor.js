function getFileShowMode(name, suffix)
{	
	var fileShowModeMap = {
			abap		:	"abap",
			abc			:	"abc",
			as			:	"actionscript",
			ada			:	"ada",
			adb			:	"ada",
    		htaccess	:	"apache_conf",
    		htpasswd	:	"apache_conf",
    		conf		:	"apache_conf",
    		htaccess	:	"apache_conf",
    		htgroups	:	"apache_conf",
    		htpasswd	:	"apache_conf",
    		asciidoc	:	"asciidoc",
    		adoc		:	"asciidoc",
    		dsl			:	"asl",
    		asl			:	"asl",
    		asm			:	"assembly_x86",
    		ahk			:	"autohotkey",
    		apex		:	"apex",
    		cls			:	"apex",
    		trigger		:	"apex",
    		tgr			:	"apex",
    		aql			:	"aql",
    		cmd			:	"batchfile",
    		bat			:	"batchfile",
    		cpp			:	"c_cpp",
    		c			:	"c_cpp",
    		cc			:	"c_cpp",
    		cxx			:	"c_cpp",
    		h			:	"c_cpp",
    		hh			:	"c_cpp",
    		hpp			:	"c_cpp",
    		ino			:	"c_cpp",
    		c9search_results	:	"c9search",
    		cr			:	"cirru",
    		cirru		:	"cirru",
    		clj			:	"clojure",		
    		cljs		:	"clojure",		
    		cbl			:	"cobol",		
    		cob			:	"cobol",		
    		coffee		:	"coffee",		
    		cf			:	"coffee",		
    		cson		:	"coffee",		
    		cakefile	:	"coffee",		
    		cfm			:	"coldfusion",		
    		cs			:	"csharp",		
    		csd			:	"csound_document",		
    		orc			:	"csound_orchestra",		
    		sco			:	"csound_score",		
    		css			:	"css",		
    		curly		:	"curly",		
    		d			:	"d",		
    		di			:	"d",		
    		dart		:	"dart",		
    		diff		:	"diff",		
    		patch		:	"diff",		
    		dockerfile	:	"dockerfile",		
    		dot			:	"dot",		
    		drl			:	"drools",		
    		edi			:	"edifact",		
    		e			:	"eiffel",		
    		ge			:	"eiffel",		
    		ejs			:	"ejs",		
    		ex			:	"elixir",		
    		exs			:	"elixir",		
    		elm			:	"elm",		
    		erl			:	"erlang",	
    		hrl			:	"erlang",	
    		frt			:	"forth",		
    		fs			:	"forth",		
    		ldr			:	"forth",		
    		fth			:	"forth",		
    		"4th"		:	"forth",		
    		f			:	"fortran",		
    		f90			:	"fortran",		
    		fsi			:	"fsharp",		
    		fs			:	"fsharp",		
    		ml			:	"fsharp",		
    		mli			:	"fsharp",		
    		fsx			:	"fsharp",		
    		fsscript	:	"fsharp",		
    		fsl			:	"fsl",		
    		ftl			:	"ftl",		
    		gcode		:	"gcode",
    		feature		:	"gherkin",
    		gitignore	:	"gitignore",
    		glsl		:	"glsl",
    		frag		:	"glsl",
    		vert		:	"glsl",
    		gbs			:	"gobstones",
    		go			:	"golang",
    		ggl			:	"graphqlschema",
    		groovy		:	"groovy",
    		haml		:	"haml",
    		hbs			:	"handlebars",
    		handlebars	:	"handlebars",
    		tpl			:	"handlebars",
    		mustache	:	"handlebars",
    		hs			:	"haskell",
    		cabal		:	"haskell_cabal",
    		hx			:	"haxe",
    		hjson		:	"hjson",
    		html		:	"html",
    		htm			:	"html",
    		xhtml		:	"html",
    		vue			:	"html",
    		we			:	"html",
    		wpy			:	"html",
    		eex			:	"html_elixir",
    		erb			:	"html_ruby",
    		rhtml		:	"html_ruby",
    		ini			:	"ini",
    		conf		:	"ini",
    		cfg			:	"ini",
    		prefs		:	"ini",
    		io			:	"io",
    		jack		:	"jack",
    		jade		:	"jade",
    		pug			:	"jade",
    		java		:	"java",
    		js			:	"javascript",
    		jsm			:	"javascript",
    		jsx			:	"javascript",
    		json5		:	"json5",
    		jq			:	"jsoniq",
    		jsp			:	"jsp",
    		jssm		:	"jssm",
    		jssm_state	:	"jssm",
    		jsx			:	"jsx",
    		jl			:	"julia",
    		kt			:	"kotlin",
    		kts			:	"kotlin",
    		tex			:	"latex",
    		latex		:	"latex",
    		ltx			:	"latex",
    		bib			:	"latex",
    		less		:	"less",
    		liquid		:	"liquid",
    		lisp		:	"lisp",
    		logic		:	"livescript",
    		lql			:	"livescript",
    		lsl			:	"lsl",
    		lua			:	"lua",
    		lp			:	"luapage",
    		lucene		:	"lucene",
    		makefile	:	"makefile",
    		gnumakefile	:	"makefile",
    		makefile	:	"makefile",
    		ocamlmakefile	:	"makefile",
    		make		:	"makefile",
    		cmake		:	"makefile",
    		md			:	"markdown",
	        markdown	:	"markdown",
	        mask		:	"mask",
	        matlab 		:	"matlab",
	        php 		: 	"php",
	        inc 		: 	"php",
	        phtml 		: 	"php",
	        shtml 		: 	"php",
	        php3 		: 	"php",
	        php4 		: 	"php",
	        php5		: 	"php",
	        phps 		: 	"php",
	        phpt 		: 	"php",
	        aw	 		: 	"php",
	        ctp 		: 	"php",
	        module 		: 	"php",
	        py			:   "python",
	        txt			:	"text",
	        vbs			:    "vbscript",
	        v			:    "verilog",
	        vh			:    "verilog",
	        sv			:    "verilog",
	        svh			:    "verilog",
	        vhd			:    "vhdl",
	        vhdl		:    "vhdl",
	        xml			:    "xml",
	        rdf			:    "xml",
	        rss			:    "xml",
	        wsdl		:    "xml",
	        xslt		:    "xml",
	        atom		:    "xml",
	        mathml		:    "xml",
	        mml			:    "xml",
	        xul			:    "xml",
	        xbl			:    "xml",
	        xaml		:    "xml",
	        xq			:    "xquery",
	        yaml		:    "yaml",
	        yml			:    "yaml",
	        xq			:    "xquery",
	        zeek		:    "zeek",
	        bro			:    "zeek",
	};
	
    var showMode = fileShowModeMap[name];
    if (undefined == showMode)
	{
		showMode = fileShowModeMap[suffix];
		if(undefined == showMode)
		{
			return "text";
		}
	}
	
	return showMode;
}