%.index: %.csv
	cat $? | tail -n +2 | cut -f 1 | sort | uniq > $@

.PHONY: indexes

indexes: Builtins_MDN.index WebAPIs_Experimental.index WebAPIs_MDN.index WebAPIs_MDN_undocumented.index Window_MDN.index
