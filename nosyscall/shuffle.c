#include <stdlib.h>
#include <string.h>

int* shuffle(int* items, unsigned len)
{
	int* result = malloc(len * sizeof(int));
	if (!result) return NULL;
	memcpy(result, items, len * sizeof(int));
        for (unsigned i = 0; i < len; i++)
	{
		unsigned j = rand() % len;
		int t = result[i]; result[i] = result[j]; result[j] = t;
        }
	return result;
}
