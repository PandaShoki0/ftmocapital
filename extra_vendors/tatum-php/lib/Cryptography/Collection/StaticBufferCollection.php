<?php

declare(strict_types=1);

namespace Tatum\Cryptography\Collection;
!defined("TATUM-SDK") && exit();

use Tatum\Cryptography\Buffertools\BufferInterface;

/**
 * @deprecated
 */
class StaticBufferCollection extends StaticCollection {
    /**
     * @var BufferInterface[]
     */
    protected $set = [];

    /**
     * @var int
     */
    protected $position = 0;

    /**
     * StaticBufferCollection constructor.
     * @param BufferInterface ...$values
     */
    public function __construct(BufferInterface ...$values) {
        $this->set = $values;
    }

    /**
     * @return BufferInterface
     */
    public function bottom(): BufferInterface {
        return parent::bottom();
    }

    /**
     * @return BufferInterface
     */
    public function top(): BufferInterface {
        return parent::top();
    }

    /**
     * @return BufferInterface
     */
    public function current(): BufferInterface {
        return $this->set[$this->position];
    }

    /**
     * @param int $offset
     * @return BufferInterface
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset) {
        if (!array_key_exists($offset, $this->set)) {
            throw new \OutOfRangeException("No offset found");
        }

        return $this->set[$offset];
    }
}