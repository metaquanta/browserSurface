%.index: %.csv
	cat $? | tail -n +2 | cut -f 1 | sort | uniq > $@

.PHONY: indexes clean

indexes: $(addsuffix .index, $(basename $(wildcard *.csv)))

clean:
	rm *.index
	rm .tmp.*
